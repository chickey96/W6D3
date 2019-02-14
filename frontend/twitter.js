const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$( () => {
    $('button.follow-toggle').each(function (index, button) {
       new FollowToggle(button)
    });
    $('nav.users-search').each(function (index, search) {
       new UserSearch(search)
    });
});