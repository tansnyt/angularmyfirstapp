import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  a = 0;
  b = 3;

  item = {
    nama = "Jeruk",
    harga = 15000,
    satuan = "kg"
  };

  items = [
    { nama = "Jeruk", harga = 15000, satuan = "kg" },
    { nama = "Apel", harga = 5000, satuan = "kg" }
  ];

  tampil: boolean = false;
  tulisanOPEN: String;

  OPEN() {
    this.tulisanOPEN = "toko buka";
  }

  values = "";
  onKey(event) {
    this.values += event.target.value + '|';
  }
}
