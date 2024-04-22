import ReactDOM from "react-dom";
import TripCounter from "./TripCounter";

// target the dom element with the classs .wp-block-trip-planner-trip-timer-plugin and render the TripCounter component using the data-trip-name and data-trip-time attributes

const tripTimerBlocks = document.querySelectorAll('.wp-block-trip-planner-trip-timer-plugin');

tripTimerBlocks.forEach((block) => {
	const tripName = block.getAttribute('data-trip-name');
	const tripTime = block.getAttribute('data-trip-time');
	ReactDOM.render(<TripCounter tripName={tripName} tripTime={tripTime} />, block);
});
