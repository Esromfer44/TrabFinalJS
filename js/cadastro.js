window.addEventListener("load", function () {

    document.getElementById("btnNewUser").addEventListener("click", validarCadastro);
    document.getElementById("user").addEventListener("keypress", function () {
        
    });
    document.getElementById("pwd").addEventListener("keypress", function () {
    });    
    document.getElementById("confPwd").addEventListener("keypress", function () {
    });    

    function validarCadastro() {
        user = document.getElementById("user");
        pwd = document.getElementById("pwd");
        confPwd = document.getElementById("confPwd");

        if (!user.value) {
            alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/logo.png", 32, "");
        }
        else if (!pwd.value) {
            alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/logo.png", 32, "");
        }
        else if (!confPwd.value) {
            alertWifi(`Confirmar senha em branco. Informe uma senha`, false, 0, "img/logo.png", 32, "");
        }
        else if (pwd.value != confPwd.value) {
            alertWifi(`Senha e confirmar senha diferentes. Tente novamente!`, false, 0, "img/logo.png", 32, "");
        }
        else cadastrarNovoUsuario(user.value, pwd.value);
    }

    function cadastrarNovoUsuario(user, pwd) {
        var usuario = {nome:user, senha:pwd};
        
        var usuarios = localStorage.getItem("usuarios");

        if (!usuarios) {
            usuarios = [usuario];
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            alertWifi(`Usuário cadastrado com sucesso!`, false, 0, "img/logo.png", 32, "");
        }
        else if (podeCadastrar(user)) {
            usuarios = JSON.parse(usuarios);
            usuarios.push(usuario);
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            alertWifi(`Usuário cadastrado com sucesso!`, false, 0, "img/logo.png", 32, "");
        }
        else  {
            alertWifi(`Esse usuário já existe. Tente outro!`, false, 0, "img/logo.png", 32, "");
        }
    }

    function podeCadastrar(user) {
        var usuarios = localStorage.getItem("usuarios");
        usuarios = JSON.parse(usuarios);
        var achou = false;
        for (i=0; i<usuarios.length; i++)
            if (usuarios[i].nome == user) {
                achou = true;
                break;
            }
        return !achou
    }
});