<template>
  <div class="dashboard p-4">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
            href="#"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="mr-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Dashboard
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        Dashboard
      </h1>
    </div>
    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <!-- <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          5,355
        </h2> -->
        <p class="text-gray-400 font-lexend font-normal">
          Peminjaman setiap bulan
        </p>
        <span class="float-right">
          <h2 class="text-gray-500 mt-2 flex">
            <span class="mr-2">
              {{
                seriesPeminjam[0].data[seriesPeminjam[0].data.length - 1] -
                seriesPeminjam[0].data[seriesPeminjam[0].data.length - 2]
              }}%
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="area"
            :options="optionsPeminjam"
            :series="seriesPeminjam"
          ></apexchart>
          <br />
          <hr />
        </div>
      </div>
      <!-- second -->
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <p class="text-gray-400 font-lexend font-normal">
          Pengunjung setiap bulan
        </p>
        <span class="float-right">
          <h2 class="text-gray-500">
            <span class="mr-2">
              {{
                seriesVisitor[0].data[seriesVisitor[0].data.length - 1] -
                seriesVisitor[0].data[seriesVisitor[0].data.length - 2]
              }}%
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="line"
            :options="optionsVisitor"
            :series="seriesVisitor"
          ></apexchart>
          <br />
          <hr />
        </div>
      </div>
    </div>
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        total: {{ total_peminjam_jurusan }}
      </h2>
      <p class="text-gray-400 font-lexend font-normal">
        Peminjam Berdasarkan Jurusan
      </p>

      <div class="wrapper-chart mt-5">
        <apexchart
          width="100%"
          height="380"
          type="pie"
          :options="optionsDonut"
          :series="seriesDonut"
        ></apexchart>
        <div class="p-3"></div>
        <br />
        <hr />
      </div>
    </div>
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        Tabel Peminjaman
      </h2>

      <div class="wrapping-table mt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">ID</th>
              <th scope="col" class="uppercase px-6 py-3">Tanggal Pinjam</th>
              <th scope="col" class="uppercase px-6 py-3">Tanggal Kembali</th>
              <th scope="col" class="uppercase px-6 py-3">
                Tanggal Pengembalian
              </th>
              <th scope="col" class="uppercase px-6 py-3">Denda</th>
              <th scope="col" class="uppercase px-6 py-3">Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="items in table_peminjaman"
              :key="items.id_peminjaman"
            >
              <td class="px-6 py-4">
                {{ items.id_peminjaman }}
              </td>
              <td class="px-6 py-4">
                {{ items.tanggal_pinjam }}
              </td>
              <td class="px-6 py-4">
                {{ items.tanggal_kembali }}
              </td>
              <td class="px-6 py-4">
                {{ items.tanggal_pengembalian }}
              </td>
              <td class="px-6 py-4">
                {{ items.denda }}
              </td>
              <td class="px-6 py-4 grid grid-rows-2">
                <span
                  class="mr-2 my-2 text-green-800 bg-green-300 px-3 py-1 rounded-md cursor-pointer"
                  @click="fetchTabelPeminjaman"
                >
                  Update
                </span>
                <span
                  class="text-purple-800 mr-2 my-2 bg-purple-300 px-3 py-1 rounded-md cursor-pointer"
                  @click="fetchTabelPeminjaman"
                >
                  delete
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";

export default {
  name: "Dashboard",
  data() {
    return {
      // pengunjung_bulanan
      pengunjung_bulanan: {
        bulan: [],
        banyak: [],
      },
      table_peminjaman: [],
      // peminjam tiap jurusan
      total_peminjam_jurusan: 0,
      chart: {
        fontFamily: "lexend, sans-serif",
      },

      optionsVisitor: {
        chart: {
          id: "pengunjung",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: { show: false },
        xaxis: {
          categories: [
            "jan",
            "feb",
            "mar",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 0,
        },
        colors: ["#fceae8"],

        fill: {
          type: "solid",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          curve: "smooth",
        },
      },

      seriesVisitor: [
        {
          name: "Visitor ",
          data: [30, 40, 45, 50, 91],
        },
      ],
      optionsPeminjam: {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: { show: false },
        xaxis: {
          categories: [
            "jan",
            "feb",
            "mar",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 0,
        },
        colors: ["#4f46e5"],

        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          curve: "smooth",
        },
      },

      seriesPeminjam: [
        {
          name: "Visitor ",
          data: [30, 40, 45, 50, 91],
        },
      ],

      optionsDonut: {
        chart: {
          type: "donut",
        },
        legend: {
          position: "bottom",
          labels: {
            colors: "#78dee3",
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels: [],
      },

      seriesDonut: [20, 15, 63, 83, 99],
      tableTransaction: [
        {
          transaction: "Payment from Ike yolanda",
          datetime: "Apr 22, 2022",
          amount: "Rp.450.000",
          statusTransaction: "completed",
        },
        {
          transaction: "Payment from Ice Wulandari",
          datetime: "May 2, 2022",
          amount: "Rp.250.000",
          statusTransaction: "completed",
        },
        {
          transaction: "Payment from Alfiah Gipta Jannatil Hasanah",
          datetime: "May 5, 2022",
          amount: "Rp.150.000",
          statusTransaction: "progress",
        },
        {
          transaction: "Payment failed from #046577",
          datetime: "May 5, 2022",
          amount: "Rp.180.000",
          statusTransaction: "cancelled",
        },
      ],
    };
    // end chart data line
  },
  components: {
    Icon,
  },
  methods: {
    async tryFetch() {
      // let that = this;
      await fetch("http://localhost:3030/api", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          let temp = JSON.parse(response);
          // that.aData = temp[0];
          console.log(typeof response);
          console.log(typeof temp);
          console.log(temp[0]);
        });
    },
    async fetchPengunjung() {
      let that = this;
      let tempData = [];
      await fetch("http://localhost:3030/pengunjung", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          tempData = JSON.parse(response);
          console.log(typeof response);
          console.log(typeof tempData);
          console.log(tempData[0]);
          console.log(tempData);
          that.optionsVisitor.xaxis.categories = [];
          that.seriesVisitor[0].data = [];
          console.log(
            that.optionsVisitor.xaxis.categories,
            " ==||== ",
            that.seriesVisitor[0].data
          );
          tempData.forEach((data) => {
            that.optionsVisitor.xaxis.categories.push(
              that.convertToMonth(parseInt(data.bulan))
            );
            that.seriesVisitor[0].data.push(parseInt(data.banyak));
            that.pengunjung_bulanan.bulan.push(
              that.convertToMonth(parseInt(data.bulan))
            );
            that.pengunjung_bulanan.banyak.push(parseInt(data.banyak));
          });
        });
    },
    async fetchPeminjamanBuku() {
      let that = this;
      let tempData = [];
      await fetch("http://localhost:3030/pinjam_buku", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          tempData = JSON.parse(response);
          console.log(typeof response);
          console.log(typeof tempData);
          console.log(tempData[0]);
          console.log(tempData);
          that.seriesPeminjam[0].data = [];
          tempData.forEach((data) => {
            if (parseInt(data.coalesce) != 0)
              that.seriesPeminjam[0].data.push(parseInt(data.coalesce));
          });
        });
    },
    async fetchPeminjamJurusan() {
      let that = this;
      let tempData = [];
      let buffer = [];
      await fetch("http://localhost:3030/peminjam", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          tempData = JSON.parse(response);
          console.log(typeof response);
          console.log(typeof tempData);
          console.log(tempData[0]);
          console.log(tempData);
          console.log(that.optionsDonut.labels, " ==||== ", that.seriesDonut);
          that.optionsDonut = {
            labels: [],
          };
          that.seriesDonut = [];
          console.log(that.optionsDonut.labels, " ==||== ", that.seriesDonut);
          tempData.forEach((data) => {
            // tempData.push(data.jurusan);
            buffer.push(data.jurusan);
            that.total_peminjam_jurusan += parseInt(data.jumlah_peminjam);

            that.seriesDonut.push(parseInt(data.jumlah_peminjam));
          });
          that.optionsDonut = {
            labels: buffer,
          };
          console.log(that.optionsDonut.labels, " ", that.seriesDonut);
        });
    },
    async fetchTabelPeminjaman() {
      let that = this;
      let tempData = [];
      let buffer = [];
      await fetch("http://localhost:3030/tabel_peminjaman", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          tempData = JSON.parse(response);
          console.log(typeof response);
          console.log(typeof tempData);
          // console.log(tempData[0]);
          // console.log(tempData);
          that.table_peminjaman.push(...tempData);
          // that.table_peminjaman = tempData;
          console.log(that.table_peminjaman);
          // tempData.forEach((data) => {
          // });
        });
    },
    // logic
    convertToMonth(numbData) {
      let name = "";
      if (numbData == 1) {
        name = "jan";
      } else if (numbData == 2) {
        name = "feb";
      } else if (numbData == 3) {
        name = "mar";
      } else if (numbData == 4) {
        name = "apr";
      } else if (numbData == 5) {
        name = "may";
      } else if (numbData == 6) {
        name = "jun";
      } else if (numbData == 7) {
        name = "jul";
      } else if (numbData == 8) {
        name = "aug";
      } else if (numbData == 9) {
        name = "sep";
      } else if (numbData == 10) {
        name = "oct";
      } else if (numbData == 11) {
        name = "nov";
      } else {
        name = "dec";
      }
      return name;
    },
  },
  beforeMount() {
    let that = this;
    that.fetchPengunjung();
    that.fetchPeminjamJurusan();
    that.fetchPeminjamanBuku();
    that.fetchTabelPeminjaman();
  },
};
</script>
