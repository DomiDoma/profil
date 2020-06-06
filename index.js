function showSideBar() {
        document.getElementById('sidebar').style.height = "30%";
    }
    function exitSideBar() {
        document.getElementById('sidebar').style.height = "0";
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (this.Math.ceil(prevScrollpos) < 150/*> currentScrollPos*/) {
            document.getElementById("logo").style.setProperty("--logoSize", 8+"rem");
            document.getElementById("logo").style.setProperty("--logoBorder", 1+"rem");
            document.getElementById("toTopBtn").style.setProperty("display", "none");
        } else {
            document.getElementById("logo").style.setProperty("--logoSize", 4+"rem");
            document.getElementById("logo").style.setProperty("--logoBorder", 0.2+"rem");
            document.getElementById("toTopBtn").style.setProperty("display", "block");
        }
        prevScrollpos = currentScrollPos;
    }
    

