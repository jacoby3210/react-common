// Header file for export.


//
import { Path } from "./components/basics/path";								// React component for displaying a path in a tree data structure
import { Popup } from "./components/basics/popup";							// React component for render content on top of the main ui.


// 
import { Dropdown } from "./components/controls/dropdown";			// React component for render a drop-down menu (select).
import { Scroll } from "./components/controls/scroll";					// React component represents universal customizable content scroller.

// fields
import { Advisor } from "./components/fields/advisor";					// React component rendering  basic text filed with input suggestions.

// accordion layout
import { AccordionSection } from "./layouts/accordion/section"; // UI component, using by default to fill the accordion view.
import { AccordionView } from "./layouts/accordion/view";				// Accordion is a UI compоnent that is used to organize content on layout.

// data view and special controllers for mage output data.
import { CarouselController } from "./layouts/data/carousel-controller";
import { PageController } from "./layouts/data/page-controller";
import { TabController } from "./layouts/data/tab-controller";
import { View } from "./layouts/data/view";

export default {
	Path, Popup,
	Dropdown, Scroll,
	Advisor,
	AccordionSection, AccordionView,
	CarouselController, PageController, TabController, View
};