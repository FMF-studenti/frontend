# Refresh source files by regenerating them to see changes

ember g adapter application

ember g component nav-main
ember g component nav-sidebar
ember g component notes-filter
ember g component notes-upload
ember g component common/cookie-message
ember g component common/home-header
ember g component common/main-container
ember g component common/main-footer
ember g component common/main-header

ember g controller application
ember g controller notes/list
ember g controller notes/register-file
ember g controller notes/list/index

ember g helper capitalize-first
ember g helper fmf-constant
ember g helper group-validate
ember g helper prev-item

ember g initializer authentication
ember g initializer current-user
ember g initializer settings

ember g mixin infinity-extra

ember g model author
ember g model blog-article
ember g model external-link
ember g model quote
ember g model topic
ember g model user
ember g model notes/department
ember g model notes/file
ember g model notes/level
ember g model notes/note
ember g model notes/subject
ember g model notes/year

ember g route application
ember g route authors
ember g route cookies
ember g route error-404
ember g route index
ember g route logout
ember g route notes
ember g route notes/help
ember g route notes/index
ember g route notes/list
ember g route notes/list/index
ember g route notes/list/loading
ember g route notes/loading
ember g route notes/register-file
ember g route notes/register
ember g route notes/upload
ember g route quotes
ember g route quotes/add
ember g route quotes/edit
ember g route quotes/index
ember g route quotes/loading
ember g route quotes/quote

ember g serializer application
ember g serializer notes
ember g serializer notes/department
ember g serializer notes/file
ember g serializer notes/level
ember g serializer notes/note
ember g serializer notes/subject
ember g serializer notes/year

ember g service settings
