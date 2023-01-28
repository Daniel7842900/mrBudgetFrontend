import Navbar from "../layouts/Navbar";

function Dashboard() {
  return (
    <div className="bg-cyan-600">
      {/* <%- include('../../partial/nav/index'); %> */}
      <Navbar />
      <header className="bg-cyan-600">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-cyan-600 border-b-2 border-white border-solid">
          <h1 className="text-lg leading-6 font-semibold text-white">
            Dashboard
          </h1>
        </div>
      </header>

      <main className="bg-cyan-600">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-cyan-600">
          {/* <!-- Content --> */}

          <div className="px-4 py-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto bg-white">
              <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg leading-6 font-semibold text-center">
                  This Month
                </h2>
              </div>

              {/* <!-- Charts for month --> */}

              <div className="flex flex-col md:flex-row flex-wrap min-w-full pb-4">
                {/* <% if(monthExpTotal === 0 && monthBudTotal === 0 && */}

                {/* monthBudIncome === 0) { %> */}

                <div className="flex-1 w-full relative px-3 w-auto h-auto my-3">
                  <h3 className="text-center mx-auto">No Expense & Budget!</h3>
                </div>

                {/* <% } else { %> <% if(monthBudIncome !== 0) { %> */}

                <div className="w-full relative px-3 w-auto h-auto my-3">
                  <h3 className="text-center mx-auto font-medium">Income</h3>

                  {/* <h4 className="text-center mx-auto"><%= monthBudIncome %></h4> */}
                </div>

                {/* <% } %> <% if(monthExpTotal !== 0 || monthBudTotal !== 0) { %> */}

                {/* <!-- Bar chart for total --> */}

                <div className="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="month-total" className=""></canvas>
                </div>

                {/* <% } %> <% if(!(_.isEmpty(monthBudCat))) { %> */}

                {/* <!-- Pie chart for budget by category --> */}

                <div className="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="month-budget-category" className=""></canvas>
                </div>

                {/* <% } %> <% if(!(_.isEmpty(monthExpCat))) { %> */}

                {/* <!-- Pie chart for expense by category --> */}

                <div className="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="month-expense-category" className=""></canvas>
                </div>

                {/* <% } %> <% } %> */}
              </div>

              <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 border-t-4 border-dashed border-gray-200">
                <h2 className="text-lg leading-6 font-semibold text-center">
                  This Week
                </h2>
              </div>

              {/* <!-- Charts for week --> */}

              <div className="flex flex-col md:flex-row flex-wrap min-w-full">
                {/* <% if(weekExpTotal === 0 && weekBudTotal === 0 && weekBudIncome */}

                {/* === 0) { %> */}

                <div className="flex-1 w-full relative px-3 w-auto h-auto my-3">
                  <h3 className="text-center mx-auto pb-4">
                    No Expense & Budget!
                  </h3>
                </div>

                {/* <% } else { %> <% if(weekBudIncome !== 0) { %> */}

                <div className="w-full relative px-3 w-auto h-auto my-3">
                  <h3 className="text-center mx-auto font-medium">Income</h3>

                  {/* <h4 className="text-center mx-auto"><%= weekBudIncome %></h4> */}
                </div>

                {/* <% } %> <% if(weekExpTotal !== 0 || weekBudTotal !== 0) { %> */}

                {/* <!-- Bar chart for total --> */}

                <div className="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="week-total" className=""></canvas>
                </div>

                {/* <% } %><% if(!(_.isEmpty(weekBudCat))) { %> */}

                {/* <!-- Pie chart for budget by category --> */}

                <div className="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="week-budget-category" className=""></canvas>
                </div>

                {/* <% } %><% if(!(_.isEmpty(weekExpCat))) { %> */}

                {/* <!-- Pie chart for expense by category --> */}

                <div className="flex-1 w-full md:w-1/3 relative px-3 w-auto h-auto my-3">
                  <canvas id="week-expense-category" className=""></canvas>
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
