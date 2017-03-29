function kirim(form)
{
    console.log("kirim");
    var no_ktp_str = (form.no_ktp.value);
    var nama_str = (form.nama.value);
    var alamat_str = (form.alamat.value);
    var tempat_lahir_str = (form.tempat_lahir.value);
    var tanggal_lahir_str = (form.tanggal_lahir.value);
    var bulan_lahir_str = (form.bulan_lahir.value);
    var tahun_lahir_str = (form.tahun_lahir.value);
    var jenis_kelamin_str = "";
    var no_telepon_str = (form.no_telepon.value);
    var stasiun_asal_str= (form.stasiun_asal.value);
    var stasiun_tujuan_str= (form.stasiun_tujuan.value);
    var jumlah_beli_dewasa_str= (form.jumlah_beli_dewasa.value);
    var jumlah_beli_anak_str= (form.jumlah_beli_anak.value);
    var jumlah_beli_inflant_str= (form.jumlah_beli_inflant.value);
    var nama_kereta_str= (form.nama_kereta.value);
    if (form.pria.checked == true)
    { 
        jenis_kelamin_str = "Pria";
    }
    else
    if (form.wanita.checked == true) 
    {   
        jenis_kelamin_str = "Wanita";
    }
    form.tmpl_no_ktp.value = no_ktp_str;
    form.tmpl_nama.value = nama_str;
    form.tmpl_alamat.value = alamat_str;
    form.tmpl_tempat_lahir.value = tempat_lahir_str;
    form.tmpl_tanggal_lahir.value = tanggal_lahir_str;
    form.tmpl_bulan_lahir.value = bulan_lahir_str;
    form.tmpl_tahun_lahir.value = tahun_lahir_str;
    form.tmpl_jenis_kelamin.value = jenis_kelamin_str;
    form.tmpl_no_telepon.value = no_telepon_str;
    form.tmpl_stasiun_asal.value = stasiun_asal_str;
    form.tmpl_stasiun_tujuan.value = stasiun_tujuan_str;
    form.tmpl_jumlah_beli_dewasa.value = jumlah_beli_dewasa_str;
    form.tmpl_jumlah_beli_anak.value = jumlah_beli_anak_str;
    form.tmpl_jumlah_beli_inflant.value = jumlah_beli_inflant_str;
    form.tmpl_nama_kereta.value = nama_kereta_str;
    console.log(nama_kereta_str);
}