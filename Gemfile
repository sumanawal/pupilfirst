source 'https://rubygems.org'

# Required to suppress warnings about insecure :github source.
git_source(:github) { |repo_name| "https://github.com/#{repo_name}.git" }

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.7.1'

gem 'dotenv-rails', groups: [:development, :test]

gem 'activeadmin', '>= 1.0.0.pre4'
gem 'flattened_active_admin' # better looking and customizable activeadmin
gem 'just-datetime-picker' # Date/Time picker support for active admin.
# gem 'active_skin' # Better lookin' active admin! Temporarily removed in favour of flattened_acitve_admin
gem 'attribute_normalizer', '~> 1.2.0.b' # Attribute normalization. TODO: Check to see if version lock can be removed.
gem 'carrierwave' # One uploader to rule them all.
gem 'carrierwave_backgrounder' # Backgrounder for carrierwave.
gem 'carrierwave-bombshelter' # Protects your carrierwave from image bombs (and such).

# Required by Carrierwave to upload to S3.
# TODO: Replace this with fog-aws when possible. Fog is a super-fat gem.
# Make sure app will boot up in production mode afterwards. Carrierwave has trouble working with fog-aws.
gem 'fog'

gem 'coffee-rails', '~> 4.1.0' # Coffeescript on Rails.
gem 'devise' # User auth library.
gem 'devise_invitable' # Allow invites to be sent out.
gem 'jbuilder', '~> 2.0' # Standard part of Rails, but unused, since we don't have an API.
gem 'jquery-rails' # JQuery on Rails.
gem 'mini_magick' # Image processing.
gem 'pg' # PostgreSQL support.
gem 'sass-rails', '~> 5.0'
gem 'sentry-raven' # Reporter for Sentry Heroku add-on.
gem 'slim' # Slim templating.
gem 'turbolinks' # Quicker page navigation. https://github.com/turbolinks/turbolinks
gem 'uglifier', '>= 2.7.2' # JavaScript compressor.
gem 'rest-client' # Used to contact Fast Alerts' API.
gem 'cancancan', '~> 1.8' # Used to manage administrator types and roles in the ActiveAdmin interface.
gem 'phony_rails' # Phone number validation and normalization.

# Select2 javascript select box improvement library, using in ActiveAdmin interface.
# TODO: This gem currently serves version 3.x of select2. Version 4 (released) has breaking changes. Take care when upgrading.
gem 'select2-rails', '~> 3.5.10'

gem 'bootstrap-sass', '~> 3.3.3' # Official Sass port of Bootstrap.
gem 'autoprefixer-rails' # Autoprefixer for Ruby and Ruby on Rails.
gem 'simple_form', '~> 3.1.1' # Simple-form with support for Bootstrap 3.
gem 'simple_form_fancy_uploads' # simple_form custom inputs to get image/link previews with file uploads. https://github.com/apeacox/simple_form_fancy_uploads

# TODO: The zones list in the gem was outdated.
# Have updated and submitted a PR (https://github.com/ralovets/valid_url/pull/10). Using a personal fork until it's merged.
gem 'valid_url', github: 'ajaleelp/valid_url', branch: 'patch-1' # New url validataion gem
gem 'logstash-logger' # A better logger.

# Used for picking date and time fields in a few places.
gem 'datetimepicker-rails', github: 'zpaulovics/datetimepicker-rails', branch: 'master', submodules: true
gem 'momentjs-rails', '>= 2.8.1', github: 'derekprior/momentjs-rails' # Required by datetimepicker-rails.

gem 'roadie-rails' # CSS management for e-mails.
gem 'passenger', '>= 5.0.22' # Passenger web-server.
gem 'delayed_job_active_record' # Delayed Job for deferring tasks.
gem 'delayed_job_web' # Web interface for delayed_job
gem 'seedbank' # Better organized seed data.
gem 'font-awesome-rails' # Icons from font-awesome!

# Let's not deal with flash messages, yeah? Tracking modified github master with early rendering fix. See link below.
# https://github.com/mobmewireless/unobtrusive_flash/commit/24e7787d16db66f7956747444433a4e47278193a
gem 'unobtrusive_flash', github: 'mobmewireless/unobtrusive_flash', branch: 'master'

gem 'friendly_id' # Slugs for links. http://norman.github.io/friendly_id
gem 'gravtastic' # Use gravatars as fallback avatars
gem 'require_all' # Easier folder require-s.
gem 'lita-slack', github: 'litaio/lita-slack', require: false # Lita adapter for Slack. TODO: removing github repo tracking when gem is updated
gem 'kramdown' # kramdown is a fast, pure Ruby Markdown superset converter, using a strict syntax definition and supporting several common extensions. http://kramdown.gettalong.org
gem 'gaffe' # Custom error pages. https://github.com/mirego/gaffe
gem 'google_calendar', github: 'northworld/google_calendar' # Thin wrapper over Google Calendar API.
gem 'recaptcha', require: 'recaptcha/rails' # ReCaptcha helpers for ruby apps http://github.com/ambethia/recaptcha
gem 'groupdate' # The simplest way to group temporal data. https://github.com/ankane/groupdate
gem 'videojs_rails' # Video JS for Rails 3.1+ Asset Pipeline. https://github.com/seanbehan/videojs_rails
gem 'react-rails' # For automatically transforming JSX and using React in Rails.
gem 'has_secure_token' # Used to create tokens for models (eg: for Faculty). TODO: Will be included with ActiveRecord in Rails 5.
gem 'ahoy_matey', '~> 1.3' # Analytics for Rails
gem 'acts-as-taggable-on', '~> 4.0.0' # Tag a single model on several contexts.
gem 'will_paginate-bootstrap4' # This gem integrates the Twitter Bootstrap pagination component with the will_paginate pagination gem.
gem 'shortener' # generate short SV.CO urls for files, links etc
gem 'titleize' # better titleizing, modifies Inflector.titleize from default rails
gem 'addressable' # Addressable is a replacement for the URI implementation that is part of Ruby's standard library. https://github.com/sporkmonger/addressable
gem 'reform' # Form objects decoupled from models. http://www.trailblazer.to/gems/reform
gem 'reform-rails'
gem 'virtus' # Required for reform coercion. Attributes on Steroids for Plain Old Ruby Objects
gem 'dry-validation' # There seems to be a dependency bug in reform's coercion code - it required dry-types.
gem 'postmark-rails' # Official integration library for using Rails and ActionMailer with the Postmark HTTP API.
gem 'intercom-rails' # The easiest way to install Intercom in a Rails app.
gem 'intercom', '~> 3.5.1' # Ruby bindings for the Intercom API
gem 'wicked_pdf', github: 'mileszs/wicked_pdf' # html to pdf converted - used to generate MOOC completion certificate
gem 'jspdf-rails' # HTML5 client-side pdf generation - for certificates
gem 'draper' # Decorators/View-Models for Rails Applications
gem 'skylight' # Skylight agent for Ruby https://www.skylight.io

# Rails assets!
source 'https://rails-assets.org' do
  gem 'rails-assets-pnotify' # Superb notifications library. http://sciactive.github.io/pnotify/
  gem 'rails-assets-curioussolutions-datetimepicker' # Responsive datetimepicker for timeline builder form.
  gem 'rails-assets-trix' # rich text editor from basecamp ( used for eg in the description for targets)
  gem 'rails-assets-bootstrap-tabcollapse' # Bootstrap plugin that switches bootstrap tabs component to collapse component for small screens.
  gem 'rails-assets-masonry' # Masonry works by placing elements in optimal position based on available vertical space.
  gem 'rails-assets-jquery-stickit' # A jQuery plugin provides a sticky header, sidebar or else when scrolling.
  gem 'rails-assets-jquery.scrollTo' # Lightweight, cross-browser and highly customizable animated scrolling with jQuery
  gem 'rails-assets-intro.js' # A better way for new feature introduction and step-by-step users guide for your website and project.
  gem 'rails-assets-perfect-scrollbar' # Minimalistic but perfect custom scrollbar plugin
  gem 'rails-assets-slick-carousel' # the last carousel you'll ever need http://kenwheeler.github.io/slick
  gem 'rails-assets-tether' # A positioning engine to make overlays, tooltips and dropdowns better
  gem 'rails-assets-readmore' # A lightweight jQuery plugin for collapsing and expanding long blocks of text with "Read more" and "Close" links.
  gem 'rails-assets-waypoints' # Waypoints is a library that makes it easy to execute a function whenever you scroll to an element.
  gem 'rails-assets-chartkick' # chartkick lib for admissions dashboard charts
  gem 'rails-assets-gemini-scrollbar' # Custom overlay-scrollbars with native scrolling mechanism for web applications
end

group :development do
  gem 'letter_opener' # In development, open mails sent in browser.
  gem 'bullet' # Detect N+1 queries.
  # gem 'better_errors' # Better error info on the front-end.
  # gem 'binding_of_caller' # For advanced better_errors features - REPL, local/instance variable inspection etc.
  gem 'web-console', '~> 3.3.0' # TODO: Restored until better_errors speeds up again.

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do
  gem 'factory_girl_rails', '~> 4.0' # A library for setting up Ruby objects as test data.
  gem 'faker' # A library for generating fake data such as names, addresses, and phone numbers.
  gem 'capybara' # For RSpec feature tests.
  gem 'capybara-email' # Test ActionMailer and Mailer messages with Capybara
  gem 'poltergeist' # A PhantomJS driver for Capybara
  gem 'capybara-screenshot' # Save screenshots on failure!
  gem 'database_cleaner' # Database cleaner can handle complex DB cleanup strategies for test (feature vs regular tests).
end

group :development, :test do
  gem 'rspec-rails', '~> 3.5.0' # Duh.
  gem 'coderay' # Pretty syntax highlighting on rspec failure snippets.
  gem 'pry-rails' # Pry debugger.
  gem 'webmock' # Mocking web requests.
  gem 'rubocop', require: false # Ruby Style Guide.
  gem 'bundler-audit', require: false # Audit gems in gemfile.lock for reported vulnerabilities
  gem 'simplecov', require: false # Code coverage for Ruby 1.9+
  gem 'overcommit', require: false # A fully configurable and extendable Git hook manager
end

group :production do
  gem 'rails_12factor' # Makes running your Rails app easier. Based on the ideas behind 12factor.net.
  gem 'wkhtmltopdf-heroku', require: false # wkhtmltopdf binary for heroku / amd64
end

ruby '2.3.1'
