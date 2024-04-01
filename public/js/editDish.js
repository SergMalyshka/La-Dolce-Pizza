const sub = document.querySelector("#submit");
const del = document.querySelector("#delete");

const sendEdit = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#editDishName").value.trim();
  const price = document.querySelector("#editDishPrice").value.trim();
  const id = document.querySelector("#dishId").value;
  const response = await fetch("/api/menu/dishes/", {
    method: "PUT",
    body: JSON.stringify({
      name,
      price,
      id,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/api/menu/dishes");
  } else {
    alert("Failed to edit dish.");
  }
};

const sendDelete = async (event) => {
  event.preventDefault();
  const id = document.querySelector("#dishId").value;
  const response = await fetch(`/api/menu/dishes/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/api/menu/dishes");
  } else {
    alert("Failed to delete menu item.");
  }
};

sub.addEventListener("click", sendEdit);
del.addEventListener("click", sendDelete);
