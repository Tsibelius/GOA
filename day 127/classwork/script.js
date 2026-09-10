window.onload = () => {
        
        let titleEl = document.createElement('h1');
        document.body.appendChild(titleEl);

        
        function showCurrentTime() {
            let date = new Date();  

            let year = date.getFullYear();
            let month = date.getMonth() + 1; 
            let day = date.getDate();

            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            
            titleEl.textContent = ' თარიღი: ' + year + ' წლის ' + day + ' : ' + month + ' — დრო: ' + hours + ':' + minutes + ':' + seconds;
        }

        
        showCurrentTime();

       
    };