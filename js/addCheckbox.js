document.addEventListener("DOMContentLoaded", () => {
  const cleanParent = (parent) => {
    parent.innerHTML = "";
  };

  const addCheckbox = (parent, labelText) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = "agree";
    checkbox.className = "checkbox-defense";
    checkbox.id = "agree-checkbox"; // Добавляем id для чекбокса

    const label = document.createElement("label");
    label.innerHTML = labelText;
    label.htmlFor = "agree-checkbox"; // Устанавливаем свойство htmlFor, чтобы связать метку с чекбоксом
    label.style.display = "inline";
    label.style.paddingLeft = "10px";

    parent.appendChild(checkbox);
    parent.appendChild(label);

    const submitButton = document.querySelector("#cbkPhoneBtn");
    submitButton.disabled = true;

    const isClientCalled = localStorage.getItem("client_called");
    if (isClientCalled !== "true") {
      checkbox.addEventListener("change", () => {
        submitButton.disabled = !checkbox.checked;
      });
      submitButton.addEventListener("click", () => {
        localStorage.setItem("client_called", "true");
      });
    } else {
      submitButton.disabled = true;
    }
  };

  const waitForElement = () => {
    const cbkWindowBgr = document.querySelector(".cbk-window-bgr");
    if (cbkWindowBgr) {
      clearInterval(intervalId);
      const form_ctx = document.querySelector(".cbk-personal-agreement").parentElement;
      cleanParent(form_ctx);
      addCheckbox(
        form_ctx,
        `Согласен с условиями пользовательского <a href="https://app.digitalforce.pw/agreement/callback/358718/44173/" class="cbk-agreement-link" target="_blank">соглашения</a> и даю разрешение на обработку своих персональных данных`
      );
    }
  };

  const intervalId = setInterval(waitForElement, 500);
});
