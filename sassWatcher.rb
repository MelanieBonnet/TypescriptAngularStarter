#!/usr/bin/env ruby

require 'rubygems'
require 'compass'
require 'compass/exec'

if RUBY_PLATFORM =~ /win32/
  require 'Win32API'
  $win32_console_kbhit = Win32API.new("msvcrt", "_kbhit", [], 'I')
  def console_input_ready?
    $win32_console_kbhit.call != 0
  end
  def nonblocking_stdin_gets
    sleep(0.1) until console_input_ready?
    $stdin.gets  # don't bother to use getc, it also blocks until user hits <return>
  end
else
  def nonblocking_stdin_gets
    $stdin.gets  # it just works, on unix
  end
end

def commands
  while nonblocking_stdin_gets !~ /^exit$/i
    puts "Invalid command"
  end
  abort
end

def watch
  threads = []
  ARGV.each do |arg|
    threads << Thread.new {
      Compass::Exec::SubCommandUI.new(["watch", arg, "--force"]).run!
    }
    sleep(1)
  end
  threads << Thread.start { commands }
  sleep(1)
  threads.each { |thr| thr.join }
end

begin
  puts "\nTap \"exit\" to stop watching or press Ctrl-C\n"
  watch
rescue StandardError => e
  abort "Stop watching\n"
rescue SystemExit, Interrupt
  abort "Stop watching\n"
end
