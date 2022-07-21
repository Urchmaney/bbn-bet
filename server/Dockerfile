FROM ruby:3.0-alpine AS rails-toolbox

# Default directory
ENV INSTALL_PATH /opt/app
RUN mkdir -p $INSTALL_PATH
RUN apk update && apk add --virtual build-dependencies build-base
RUN apk add libpq-dev
# Install rails
RUN gem install rails bundler
#RUN chown -R user:user /opt/app
WORKDIR /opt/app

COPY Gemfile.lock Gemfile /opt/app/

RUN bundle install
COPY . ./

EXPOSE 3000

# Run a shell
CMD ["rails", "server", "-b", "0.0.0.0"]