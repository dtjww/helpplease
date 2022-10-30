<template>
  <q-list>
    <q-expansion-item expand-separator icon='location_on' label="Location">
      <q-card class="qCard">
          <div v-for="station in stations" :key="station" class="qcardsec">
          <q-checkbox v-model=selectedLoc :val=station.name :label=station.name />
          </div>
      </q-card>
    </q-expansion-item>
  </q-list>
  <q-list>
    <q-expansion-item expand-separator icon='category' label="Category">
      <q-card class="qCard">
        <div v-for="task in tasks" :key="task">
          <q-checkbox v-model=category :val=task :label=task />
        </div>
      </q-card>

    </q-expansion-item>
  </q-list>
</template>

<script>
// import { ref } from 'vue';

export default {

  data() {
    return {
      stations: [
        { name: 'Admiralty' }, { name: "Aljunied" }, { name: 'Ang Mo Kio' }, { name: 'Bartley' }, { name: 'Bayfront' }, { name: 'Beauty World' }, { name: 'Bedok North' }, { name: 'Bedok Reservoir' },
        { name: 'Bencoolen' }, { name: 'Bendemeer' }, { name: 'Bishan' }, { name: 'Boon Lay' }, { name: 'Botanic Gardens' },
        { name: 'Braddell' }, { name: 'Bras Basah' }, { name: 'Buangkok' }, { name: 'Bukit Batok' }, { name: 'Bukit Gombak' },
        { name: 'Bukit Panjang' }, { name: 'Buona Vista' }, { name: 'Caldecott' }, { name: 'Cashew' }, { name: 'Changi Airport' },
        { name: 'Chinatown' }, { name: 'Chinese Garden' }, { name: 'Choa Chu Kang' }, { name: 'Clarke Quay' }, { name: 'Clementi' },
        { name: 'Commonwealth' }, { name: 'Dakota' }, { name: 'Dhoby Ghaut' }, { name: 'Dover' }, { name: 'Esplanade' },
        { name: 'Eunos' }, { name: 'Expo' }, { name: 'Farrer Park' }, { name: 'Farrer Road' }, { name: 'Fort Canning' },
        { name: 'Gul Circle' }, { name: 'HarbourFront' }, { name: 'Haw Par Villa' }, { name: 'Hillview' }, { name: 'Holland Village' },
        { name: 'Jalan Besar' }, { name: 'Joo Koon' }, { name: 'Jurong East' }, { name: 'Kaki Bukit' }, { name: 'Kallang' },
        { name: 'Kembangan' }, { name: 'Khatib' }, { name: 'King Albert Park' }, { name: 'Kovan' }, { name: 'Kranji' },
        { name: 'Labrador Park' }, { name: 'Lakeside' }, { name: 'Little India' }, { name: 'Lorong Chuan' }, { name: 'MacPherson' },
        { name: 'Marina Bay' }, { name: 'Marina South Pier' }, { name: 'Marymount' }, { name: 'Mattar' }, { name: 'Mountbatten' },
        { name: 'Newton' }, { name: 'Nicoll Highway' }, { name: 'Novena' }, { name: 'one-north' }, { name: 'Outram Park' },
        { name: 'Pasir Panjang' }, { name: 'Pasir Ris' }, { name: 'Paya Lebar' }, { name: 'Pioneer' }, { name: 'Potong Pasir' },
        { name: 'Punggol' }, { name: 'Queenstown' }, { name: 'Raffles Place' }, { name: 'Redhill' }, { name: 'Rochor' },
        { name: 'Sembawang' }, { name: 'Sengkang' }, { name: 'Simei' }, { name: 'Sixth Avenue' }, { name: 'Somerset' },
        { name: 'Stadium' }, { name: 'Stevens' }, { name: 'Tai Seng' }, { name: 'Tampines' }, { name: 'Tampines East' },
        { name: 'Tan Kah Kee' }, { name: 'Tanah Merah' }, { name: 'Tanjong Pagar' }, { name: 'Telok Ayer' }, { name: 'Telok Blangah' },
        { name: 'Tiong Bahru' }, { name: 'Tuas Crescent' }, { name: 'Tuas Link' }, { name: 'Tuas West Road' }, { name: 'Ubi' },
        { name: 'Upper Changi' }, { name: 'Woodlands' }, { name: 'Woodlands North' }, { name: 'Woodleigh' }, { name: 'Yew Tee' },
        { name: 'Yio Chu Kang' }, { name: 'Yishun' }, { name: 'Aljunied' }, { name: 'Bedok' }, { name: 'Boon Keng' }, { name: 'Bugis' },
        { name: 'Canberra' }, { name: 'City Hall' }, { name: 'Downtown' }, { name: 'Geylang Bahru' }, { name: 'Hougang' },
        { name: 'Kent Ridge' }, { name: 'Lavender' }, { name: 'Marsiling' }, { name: 'Orchard' }, { name: 'Promenade' },
        { name: 'Serangoon' }, { name: 'Tampines West' }, { name: 'Toa Payoh' }, { name: 'Woodlands South' },
      ],
      selectedLoc: [],
      category: [],
      tasks: [
        'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
      ],
    }
  }
}
</script>
<style>
.qcardsec {
  /* float: left; */
  width: 200px;
  column-span: 1;
}

.qCard {
  width: 600px;
  column-count: 3;
}
</style>