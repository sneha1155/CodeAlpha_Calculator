function appendValue(val) {
    document.getElementById("result").value += val;
  }

  function clearResult() {
    document.getElementById("result").value = "";
  }

  function calculate() {
    try {
      document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch {
      document.getElementById("result").value = "Error!";
    }
  }

  function backspace() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
  }
