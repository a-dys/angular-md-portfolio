/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function ProjectsDataService($q) {
  var projects = [
    {
      name: 'Loteria Paragonowa',
      image: 'loteria_thumb.jpg',
      desc: 'Współpraca przy tworzeniu strony Loterii Paragonowej - w zakres moich zadań wchodziło stworzenie widoków ' +
      'na podstawie projektów graficznych, przystosowanie strony do wyświetlania na urządzeniach mobilnych.',
      url: 'https://loteriaparagonowa.gov.pl/'
    },
    {
      name: 'Bistro Dorota',
      image: 'dorota_thumb.jpg',
      desc: 'Strona reklamowa poznańskiej restauracji, z możliwością samodzielnej edycji karty dań.',
      url: 'http://www.dorota.poznan.pl/'
    },
    {
      name: 'Kantor Gold',
      image: 'kantor_thumb.jpg',
      desc: 'Stworzenie strony www typu onepage na podstawie dostarczonych makiet. ' +
      'Integracja z API obsługującym ceny wymiany walut.',
      url: 'http://www.kantor-gold.pl/'
    },
    {
      name: 'Monoc Druk',
      image: 'monoc_thumb.png',
      desc: 'Strona produktowa drukarni, przygotowana na podstawie projektu grafika.'
    },
    {
      name: 'Crystal CRM',
      image: 'crystalcrm.pl_thumb.png',
      desc: 'Strona produktowa systemu informatycznego, przygotowana na podstawie projektu grafika.'
    },
    {
      name: 'Symposion',
      image: 'symposion_thumb.jpg',
      desc: 'Poprawa wyglądu i rozbudowa aplikacji internetowej dotyczącej organizacji spotkań medycznych.'
    },
    {
      name: 'Serwis społecznościowy dla podróżników - projekt studencki',
      image: 'wagabunda_thumb.png',
      desc: 'Aplikacja bazodanowa umożliwiająca zaznaczanie miejsc na mapie, dodawanie zdjęć i komentarzy.'
    }
  ];

  // Promise-based API
  return {
    loadAllProjects: function() {
      // Simulate async nature of real remote calls
      return $q.when(projects);
    }
  };
}

export default ['$q', ProjectsDataService];

