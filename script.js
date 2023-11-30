function generatePassword() {
    var length = document.getElementById("length").value;
    var includeUppercase = document.getElementById("include-uppercase").checked;
    var includeLowercase = document.getElementById("include-lowercase").checked;
    var includeNumbers = document.getElementById("include-numbers").checked;
    var includeSpecial = document.getElementById("include-special").checked;
    
    var charset = "";
    if (includeUppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
      charset += "0123456789";
    }
    if (includeSpecial) {
      charset += "!@#$%^&*()_+{}[]|:;<>,.?/~`";
    }
    
    var password = "";
    
    for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    
    document.getElementById("password").textContent = password;
    document.getElementById("copy-message").textContent = "";
  }
  
  function copyToClipboard() {
    var password = document.getElementById("password").textContent;
    
    var textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    
    document.getElementById("copy-message").textContent = "Password copied to clipboard!";
  }
  