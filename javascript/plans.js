// Set initial completion state on page load
window.onload = function () {
    updatePlanStatus('plan1', 10);
    updatePlanStatus('plan2', 30);
    updatePlanStatus('plan3', 60);
  };

  function updatePlanStatus(planId, completionPercentage) {
    const checkbox = document.getElementById(planId + 'Checkbox');
    const planDetails = document.getElementById(planId);
    const completionBar = document.getElementById(planId + 'CompletionBar');
    const completionPercentageElement = document.getElementById(planId + 'Percentage');

    if (checkbox.checked) {
      planDetails.classList.add('done');
    } else {
      planDetails.classList.remove('done');
    }

    const completionWidth = (completionPercentage / 100) * 100;
    completionBar.style.width = `${completionWidth}%`;
    completionPercentageElement.innerText = `${completionWidth}%`;
  }

  function editPlan(planId) {
    // Implement edit functionality as needed
    console.log('Edit plan: ' + planId);
  }

  function deletePlan(planId) {
    // Implement delete functionality as needed
    const planDetails = document.getElementById(planId);
    planDetails.remove();
    console.log('Delete plan: ' + planId);
  }

  function addNewPlan(event) {
    event.preventDefault();

    const newPlanTitle = document.getElementById('newPlanTitle').value;
    const newPlanDescription = document.getElementById('newPlanDescription').value;
    const newPlanDueDate = document.getElementById('newPlanDueDate').value;
    const newPlanPriority = document.getElementById('newPlanPriority').value;
    const newPlanCompletion = document.getElementById('newPlanCompletion').value;

    const newPlanId = 'plan' + (document.querySelectorAll('.plan-item').length + 1);

    const plansContainer = document.getElementById('plansContainer');
    const newPlanItem = document.createElement('div');
    newPlanItem.classList.add('plan-item');
    newPlanItem.id = newPlanId;

    newPlanItem.innerHTML = `
      <input type="checkbox" class="plan-checkbox" id="${newPlanId}Checkbox" onclick="updatePlanStatus('${newPlanId}', ${newPlanCompletion})">
      <div class="plan-details">
        <div class="plan-title">${newPlanTitle}</div>
        <div class="plan-description">${newPlanDescription}</div>
        <div class="plan-due">Due Date: ${newPlanDueDate}</div>
        <div class="priority">Priority: ${newPlanPriority}</div>
        <div class="completion-bar-container">
          <div class="completion-bar" id="${newPlanId}CompletionBar"></div>
        </div>
        <div class="completion-percentage" id="${newPlanId}Percentage">${newPlanCompletion}%</div>
      </div>
      <div class="btn-container">
        <button class="edit-btn" onclick="editPlan('${newPlanId}')">Edit</button>
        <button class="delete-btn" onclick="deletePlan('${newPlanId}')">Delete</button>
      </div>
    `;

    plansContainer.appendChild(newPlanItem);

    // Clear the form fields
    document.getElementById('newPlanTitle').value = '';
    document.getElementById('newPlanDescription').value = '';
    document.getElementById('newPlanDueDate').value = '';
    document.getElementById('newPlanPriority').value = 'low';
    document.getElementById('newPlanCompletion').value = '';
  }