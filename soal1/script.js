<script>
        function konversi(){
          //mengambil nilai dari inputan user
          let rupiah = document.getElementById("Rupiah").value;

          //mengkonversi dari nilai Rupiah ke Dollar
          let dollar = rupiah / 14591;

          //menampilkan nilai konversi
          document.getElementById("Dollar").value = dollar.toFixed(2);
        }
</script>