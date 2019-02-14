const APIUtil = require('./api_util');

class UsersSearch{

    constructor(search) {
        this.$search = $(search);
        this.$input = $search.$('search_input')
        this.$ul = $search.$('.users')
        this.handleInput.bind(this);
       }
    handleInput() {
        APIUtil.searchUsers(this.$input); 
    }
}