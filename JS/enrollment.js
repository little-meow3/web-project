const enrollment_form = document.querySelector('#enrollment-form');
const dataContainer = document.querySelector('#enrollment_output');

const addTaskToMarkup = (task) => {
    const markup = `
    <div class="enrollment_item" id="${new Date().getTime()}">
      <span class="enrollment_item_body">
        <p class="enrollment_item_name">
          ${task.name}
        </p>
        <p class="enrollment_item_lesson">
          ${task.lesson}
        </p>
      </span>
      <div class="delete_output_item_button">
        удалить
      </div>
    </div>
  `;
    dataContainer.insertAdjacentHTML('beforeend', markup);
}

const deleteItem = (item) => {
    const values = JSON.parse(localStorage.getItem('enrollment_key'));
    const filteredValues = values.filter((value) => value.id !== item.id);
    localStorage.setItem('enrollment_key', JSON.stringify(filteredValues));
    item.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('enrollment_key')) {
        const schedule = JSON.parse(localStorage.getItem('enrollment_key'));
        schedule.forEach((task) => {
            addTaskToMarkup(task);
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.delete_output_item_button')) {
            const item = e.target.closest('.enrollment_item');
            deleteItem(item);
        }
    });

    enrollment_form.addEventListener('submit', (e) => {
        e.preventDefault();
        const enrollment_formData = new FormData(e.target);
        const values = Object.fromEntries(enrollment_formData);

        if (!values.name) {
            alert('Please fill in all fields');
            return;
        }

        addTaskToMarkup(values);
    });

    dataContainer.addEventListener('DOMSubtreeModified', () => {
        const items = document.querySelectorAll('.enrollment_item');

        let values = [];
        items.forEach((item) => {
            const name = item.getElementsByClassName('enrollment_item_name')[0].innerText;
            const lesson = item.getElementsByClassName('enrollment_item_lesson')[0].innerText;
            const id = item.id;

            values.push({name, lesson, id});
        });

        localStorage.setItem('enrollment_key', JSON.stringify(values));
    })
})