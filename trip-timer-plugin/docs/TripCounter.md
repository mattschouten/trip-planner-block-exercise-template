# TripCounter Component Documentation

## Overview

This document provides an overview of the TripCounter component, including its methods and their functionalities.

## Methods

| Method | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| `tripCounter` | Main component that takes a trip name and time and creates a countdown timer.| tripName, tripTime, setTripName, updateTripTime | `JSX.Element` |
`toggleVisible` | Toggles the visibility state of the popover for updating the trip time. | None | `void` |
`useEffect` (1) | Updates timeLeft and secondsLeft every 500 milliseconds based on the tripTime prop. | `tripTime` | `void` |
`useEffect` (2) | Sets the encouragement message based on the remaining seconds. | `secondsLeft` | `void` |
`encouragementClasses` | Determines the CSS classes for the encouragement area based on the remaining time. | None | `string` |
`calculateSecondsLeft` | Calculates the number of seconds left until the trip time.	 | `time` | `number` |	
`getTimeInfoColorClass`  | Determines the color class for the time information based on the remaining seconds.| `secondsLeft` (number) | `string` |
`niceHumanTime` | Formats the trip time into a human-readable string. | `time` | `string` |
`calculateTimeLeft` | Calculates the time left until the trip time. | `time` | `string` or `undefined` |
