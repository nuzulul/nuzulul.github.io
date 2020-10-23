---
layout: post
title: Unable to load the EventMachine C extension; To use the pure-ruby reactor,
  requi re 'em/pure_ruby'
date: 2020-10-23 00:00:00 +0700
categories: jekyll

---
Error :

    E:\data\github\nuzulul.github.io>bundle exec jekyll serve --future --livereload
    
    Configuration file: E:/data/github/nuzulul.github.io/_config.yml
                Source: E:/data/github/nuzulul.github.io
           Destination: E:/data/github/nuzulul.github.io/_site
     Incremental build: disabled. Enable with --incremental
          Generating...
           Jekyll Feed: Generating feed for posts
                        done in 3.665 seconds.
     Auto-regeneration: enabled for 'E:/data/github/nuzulul.github.io'
    Unable to load the EventMachine C extension; To use the pure-ruby reactor, requi
    re 'em/pure_ruby'
    Traceback (most recent call last):
            22: from E:/portable/Ruby25/bin/jekyll:23:in `<main>'
            21: from E:/portable/Ruby25/bin/jekyll:23:in `load'
            20: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/exe/je
    kyll:15:in `<top (required)>'
            19: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/mercenary-0.3.6/lib
    /mercenary.rb:19:in `program'
            18: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/mercenary-0.3.6/lib
    /mercenary/program.rb:42:in `go'
            17: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/mercenary-0.3.6/lib
    /mercenary/command.rb:220:in `execute'
            16: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/mercenary-0.3.6/lib
    /mercenary/command.rb:220:in `each'
            15: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/mercenary-0.3.6/lib
    /mercenary/command.rb:220:in `block in execute'
            14: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve.rb:75:in `block (2 levels) in init_with_program'
            13: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve.rb:93:in `start'
            12: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve.rb:93:in `each'
            11: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve.rb:93:in `block in start'
            10: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve.rb:101:in `process'
             9: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve.rb:147:in `register_reload_hooks'
             8: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve.rb:147:in `require_relative'
             7: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve/live_reload_reactor.rb:3:in `<top (required)>'
             6: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/jekyll-3.8.6/lib/je
    kyll/commands/serve/live_reload_reactor.rb:3:in `require'
             5: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/em-websocket-0.5.1/
    lib/em-websocket.rb:3:in `<top (required)>'
             4: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/em-websocket-0.5.1/
    lib/em-websocket.rb:3:in `require'
             3: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/eventmachine-1.2.7-
    x86-mingw32/lib/eventmachine.rb:8:in `<top (required)>'
             2: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/eventmachine-1.2.7-
    x86-mingw32/lib/eventmachine.rb:8:in `require'
             1: from E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/eventmachine-1.2.7-
    x86-mingw32/lib/rubyeventmachine.rb:2:in `<top (required)>'
    E:/portable/Ruby25/lib/ruby/gems/2.5.0/gems/eventmachine-1.2.7-x86-mingw32/lib/r
    ubyeventmachine.rb:2:in `require': cannot load such file -- 2.5/rubyeventmachine
     (LoadError)
    
    E:\data\github\nuzulul.github.io>