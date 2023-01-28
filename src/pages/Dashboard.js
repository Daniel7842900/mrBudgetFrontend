function Dashboard() {
  return (
    <div class="bg-cyan-600">
      {/* <%- include('../../partial/nav/index'); %> */}

      <header class="bg-cyan-600">
        <div class="flex items-center justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-cyan-600 border-b-2 border-white border-solid">
          <h1 class="text-lg leading-6 font-semibold text-white">Dashboard</h1>
        </div>
      </header>

      <main class="bg-cyan-600">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-cyan-600">
          {/* <!-- Content --> */}

          <div class="px-4 py-4 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-auto bg-white">
              <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <h2 class="text-lg leading-6 font-semibold text-center">
                  This Month
                </h2>
              </div>

              {/* <!-- Charts for month --> */}

              <div class="flex flex-col md:flex-row flex-wrap min-w-full pb-4">
                {/* <% if(monthExpTotal === 0 && monthBudTotal === 0 && */}

                {/* monthBudIncome === 0) { %> */}

                <div class="flex-1 w-full relative px-3 w-auto h-auto my-3">
                  <h3 class="text-center mx-auto">No Expense & Budget!</h3>
                </div>

                {/* <% } else { %> <% if(monthBudIncome !== 0) { %> */}

                <div class="w-full relative px-3 w-auto h-auto my-3">
                  <h3 class="text-center mx-auto font-medium">Income</h3>

                  {/* <h4 class="text-center mx-auto"><%= monthBudIncome %></h4> */}
                </div>

                {/* <% } %> <% if(monthExpTotal !== 0 || monthBudTotal !== 0) { %> */}

                {/* <!-- Bar chart for total --> */}

                <div class="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="month-total" class=""></canvas>
                </div>

                {/* <% } %> <% if(!(_.isEmpty(monthBudCat))) { %> */}

                {/* <!-- Pie chart for budget by category --> */}

                <div class="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="month-budget-category" class=""></canvas>
                </div>

                {/* <% } %> <% if(!(_.isEmpty(monthExpCat))) { %> */}

                {/* <!-- Pie chart for expense by category --> */}

                <div class="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="month-expense-category" class=""></canvas>
                </div>

                {/* <% } %> <% } %> */}
              </div>

              <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 border-t-4 border-dashed border-gray-200">
                <h2 class="text-lg leading-6 font-semibold text-center">
                  This Week
                </h2>
              </div>

              {/* <!-- Charts for week --> */}

              <div class="flex flex-col md:flex-row flex-wrap min-w-full">
                {/* <% if(weekExpTotal === 0 && weekBudTotal === 0 && weekBudIncome */}

                {/* === 0) { %> */}

                <div class="flex-1 w-full relative px-3 w-auto h-auto my-3">
                  <h3 class="text-center mx-auto pb-4">No Expense & Budget!</h3>
                </div>

                {/* <% } else { %> <% if(weekBudIncome !== 0) { %> */}

                <div class="w-full relative px-3 w-auto h-auto my-3">
                  <h3 class="text-center mx-auto font-medium">Income</h3>

                  {/* <h4 class="text-center mx-auto"><%= weekBudIncome %></h4> */}
                </div>

                {/* <% } %> <% if(weekExpTotal !== 0 || weekBudTotal !== 0) { %> */}

                {/* <!-- Bar chart for total --> */}

                <div class="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="week-total" class=""></canvas>
                </div>

                {/* <% } %><% if(!(_.isEmpty(weekBudCat))) { %> */}

                {/* <!-- Pie chart for budget by category --> */}

                <div class="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="week-budget-category" class=""></canvas>
                </div>

                {/* <% } %><% if(!(_.isEmpty(weekExpCat))) { %> */}

                {/* <!-- Pie chart for expense by category --> */}

                <div class="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="week-expense-category" class=""></canvas>
                </div>

                {/* <% } %> <% } %> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
