var JiraClient    = require('jira-connector'),
  FileCookieStore = require('tough-cookie-filestore'),

  request         = require('request'),
  path            = require('path');

var jar = request.jar(new FileCookieStore(path.join(__dirname, 'auth', 'cookies.json')));

// For the first connection
var jira = new JiraClient({
  host: 'jira.jetru.by',
  basic_auth: {
    username: '',
    password: ''
  },
  cookie_jar: jar
});

// For the following connections
var jira = new JiraClient({
  host: 'jira.jetru.by',
  cookie_jar: jar
});
