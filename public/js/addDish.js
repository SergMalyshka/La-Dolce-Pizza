const sub = document.querySelector("#submit");
const sendNew = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#dishName").value.trim();
  const price = document.querySelector("#dishPrice").value;

  const response = await fetch("/api/menu/dishes/add", {
    method: "POST",
    body: JSON.stringify({
      name,
      price,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/api/menu/dishes");
  } else {
    alert("Failed to add new dish.");
  }
};

sub.addEventListener("click", sendNew);
