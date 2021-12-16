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
        imgChange: function () {
            this.counter += 1;
            console.log(this.counter)
        }
    }
    
  })