function showSideBar() {
        document.getElementById('sidebar').style.height = "50%";
    }
    function exitSideBar() {
        document.getElementById('sidebar').style.height = "0";
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (this.Math.ceil(prevScrollpos) < 50/*> currentScrollPos*/) {
            document.getElementById("logo").style.setProperty("--logoSize", 8+"rem");
            document.getElementById("logo").style.setProperty("--logoBorder", 1+"rem");
        } else {
            document.getElementById("logo").style.setProperty("--logoSize", 3+"rem");
            document.getElementById("logo").style.setProperty("--logoBorder", 0.2+"rem");
        }
        prevScrollpos = currentScrollPos;
    }
    

