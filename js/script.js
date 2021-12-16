var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        items: [
            'image1.jpg' ,
            'image2.jpg' ,
            'image3.jpg' ,
            'image4.jpg' ,
        ]
    },
    methods: {
        imgChangeN: function () {
            this.counter += 1;
            console.log(this.counter)
            if(this.counter >= this.items.length) {
                this.counter = 0;
            }
        },
        imgChangeP: function() {
            this.counter -= 1;
            console.log(this.counter)
            if(this.counter < 0) {
                this.counter = 3;
            }
        }

    }
    
  })