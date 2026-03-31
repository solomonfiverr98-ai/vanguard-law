# SOP: Animation System (animation_system.md)

## Objective
To implement smooth, premium, and authoritative animations using `gsap` and `ScrollTrigger`.

## Logic (Layer 2: Animations)
- **Entrance**: Use `stagger` for section elements.
- **Hero**: Staggered slide-up for background and words.
- **Stats**: Use `gsap` for count-up on scroll enter.
- **Sections**: Use `ScrollTrigger` for fade-up of cards and text.

## Timings (Layer 1: Design Tokens)
- **Duration**: `0.8s` (Smooth, not jarring).
- **Ease**: `power3.out` (Natural, high-end feel).
- **Delay**: `0.2s` (Stagger between elements).

## Technical Implementation
- Use `useGSAP` hook for React (or standard `useEffect`).
- Import `gsap` and `ScrollTrigger`.
- Register `ScrollTrigger`.
