new Vue({
    el: "#wrapper",
    data: {
        isActive: false
    },
    methods: {
        toggleNav: function(){
            this.isActive = !this.isActive;
            console.log(this.isActive);
        }
    }
});