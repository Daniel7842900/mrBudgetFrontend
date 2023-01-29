import Navbar from "../layouts/Navbar";

function Expense() {
  return (
    <div class="bg-cyan-600 h-screen">
      <Navbar />
      <header class="bg-cyan-600">
        <div class="flex items-center justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-cyan-600 border-b-2 border-white border-solid">
          {/* <% if(error.length > 0) { %> */}
          <script>{/* toastr.error(`<%=error%>`); */}</script>
          {/* <%}%> */}
          <h1 class="text-lg leading-6 font-semibold text-white">Expense</h1>
          <a href="/expense/new">
            <button class="text-2xl text-white">
              <i class="fas fa-plus"></i>
            </button>
          </a>
        </div>
      </header>
      <main class="bg-cyan-600 h-full">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-cyan-600">
          {/* <!-- Content --> */}
          <div class="px-4 py-4 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 bg-white h-auto">
              {/* <!-- Edit and Delete button section --> */}
              {/* <% if(itemizedItems.length !== 0) { %> */}
              <div class="w-auto my-4 mx-10 text-right">
                <a href="/expense/edit?start=<%= startDate %>&end=<%= endDate %>">
                  <button class="text-2xl mx-2 text-yellow-500">
                    <i class="fas fa-pen"></i>
                  </button>
                </a>
                <button class="text-2xl mx-2 text-red-600" id="delete-btn">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
              {/* <% } %> */}
              {/* <!-- Date selection section --> */}
              <div class="w-auto my-4 mx-14 text-center">
                <form action="/expense" method="GET">
                  <label for="datepicker" class="text-lg">
                    Date
                  </label>
                  <div class="w-auto m-auto md:w-6/12 lg:w-6/12">
                    <input
                      type="text"
                      id="datepicker"
                      class="border-2 border-solid border-gray-200 text-center w-full mt-2"
                    />
                  </div>
                </form>
              </div>
              {/* <!-- Summary Section --> */}
              <div class="w-auto my-4 mx-6 text-center">
                <span class="text-lg">Summary</span>
                <div class="flex flex-col w-auto md:w-6/12 lg:w-6/12 m-auto border-2 border-gray-200 mt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle min-w-full sm:px-6 lg:px-8">
                      <div class="shadow border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full table-auto divide-y divide-gray-200 text-center">
                          <thead class="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Item
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Amount
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                            {/* <% if(itemizedItems.length != 0) { %> <%
                            itemizedItems.forEach((obj) => { %> <%
                            if(obj.category !== _.toLower("income")) { %> */}
                            <tr>
                              <td class="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {/* <% if(obj.subCategory === "" || obj.subCategory
                                === undefined) { let objCatDisplay =
                                getCatDisplay(obj.category); %> <%=
                                objCatDisplay %> <% } else { let
                                objSubCatDisplay =
                                getSubCatDisplay(obj.category, obj.subCategory)
                                %> <%= objSubCatDisplay %> <% } %> */}
                              </td>
                              <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {/* $<%= obj.amount %> */}
                              </td>
                              <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {/* <%= obj.description %> */}
                              </td>
                            </tr>
                            {/* <% }%> <% }) %> <% } %> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <%- include('../../partial/modal/delete') %> */}
    </div>
  );
}

export default Expense;
