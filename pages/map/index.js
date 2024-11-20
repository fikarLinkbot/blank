Page({
  data: {
    latitude: -6.200000, // Latitude default (Jakarta)
    longitude: 106.816666, // Longitude default (Jakarta)
    markers: [
      {
        id: 1,
        latitude: -6.200000,
        longitude: 106.816666,
        title: "Lokasi Saya",
        iconPath: "/assets/marker.png", // Ganti dengan ikon marker
        width: 30,
        height: 30
      }
    ]
  },

  onLoad() {
    // Minta izin lokasi
    tt.authorize({
      scope: "scope.userLocation",
      success: () => {
        console.log("Izin lokasi diberikan.");
      },
      fail: () => {
        tt.showModal({
          title: "Izin Lokasi Diperlukan",
          content: "Silakan aktifkan izin lokasi untuk menggunakan fitur ini.",
          showCancel: false
        });
      }
    });
  },

  moveToLocation() {
    const mapContext = tt.createMapContext('map'); // Pastikan ID 'map' cocok
    console.log("Fungsi moveToLocation dipanggil");
    mapContext.moveToLocation({
      success: () => {
        console.log("Peta berhasil dipindahkan.");
      },
      fail: (err) => {
        console.error("Gagal memindahkan peta:", err);
        tt.showToast({
          title: "Gagal memindahkan lokasi",
          icon: "none"
        });
      }
    });
  }
});
