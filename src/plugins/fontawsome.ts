import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// add custom fa free brand & solid types (...)
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faCog, faChevronLeft } from '@fortawesome/free-solid-svg-icons';



// Excute the libs
// createApp(App).component("fa", FontAwesomeIcon).mount("#app");
library.add(
  faGithub,
  faPlay,
  faCog,
  faChevronLeft
);

export default FontAwesomeIcon
