window.addEventListener("load", function () {

    document.getElementById("btnLogin").addEventListener("click", validarLogin);
    document.getElementById("user").addEventListener("keypress", function () {
        
    });
    document.getElementById("pwd").addEventListener("keypress", function () {
    
    });

    function validarLogin() {
        var user = document.getElementById("user");
        var pwd = document.getElementById("pwd");
    
        if (!user.value) {
        
            alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/logo.png", 30, "");
        }
        else if (!pwd.value)  {
            alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/logo.png", 30, "");
        }
        else 
            processarLogin(user.value, pwd.value);
    }

    function processarLogin(user, pwd) {
        if (typeof(Storage) != "undefined") {
            usuarios = localStorage.getItem("usuarios");
            if (!usuarios)  {
                alertWifi(`Usuário inexistente. Tente um usuário diferente!`, false, 0, "img/logo.png", 30, "");
            }
            else {
                var usuarios = JSON.parse(usuarios);
                var achou = false;
                for (i=0; i<usuarios.length; i++)
                    if (usuarios[i].nome == user && usuarios[i].senha == pwd) {
                        achou = true;
                        break;
                    }
                if (achou) window.open("jogo.html","_self");
                else  {
                    alertWifi(`Usuário inexistente. Tente um usuário diferente!`, false, 0, "img/logo.png", 30, "");
                }
            }
        }
        else  {
            alertWifi(`Problemas no navegador. Não será possível executar o jogo!`, false, 0, "img/logo.png", 30, "");
        }
    }
});




