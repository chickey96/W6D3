const APIUtil = require('./api_util');

class FollowToggle {
    constructor (button) {
        this.$button = $(button);
        this.userId = this.$button.data('user-id');
        this.followState = this.$button.data('initial-follow-state');
        this.render();
        this.$button.on('click', this.handleClick.bind(this));
    }

    render () {
        if(this.followState === "followed"){
            this.$button.text("Unfollow!");
        }else{
            this.$button.text("Follow!");
        }
    }

    handleClick (e) {
        e.preventDefault();
        if(this.followState === "unfollowed"){
            this.$button.attr('disabled', true);
            this.render();
            APIUtil.followUser(this.userId).then( () => {
                this.$button.attr('disabled', false)
                this.followState = "followed";
                this.render();
            });
            
        }else {
            this.$button.attr('disabled', true);
            this.render();
            APIUtil.unfollowUser(this.userId).then(() => {
                this.$button.attr('disabled', false);
                this.followState = "unfollowed";
                this.render();
            });
        }
    }
}



module.exports = FollowToggle;