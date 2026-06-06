# Development Challenges & Problem Log

This document outlines the technical and creative hurdles encountered during the development of the DevCodex agency website.

## 1. AI Knowledge Base Reorganization
**Problem**: The initial `ai-data.json` file contained over 170 items, but more than 75% of them were incorrectly categorized under "General". This made it difficult for the AI Assistant to provide specific, context-relevant answers.
**Solution**: I manually mapped and reorganized the entire dataset into **11 logical categories** (e.g., *Custom Development*, *Business & Strategy*, *Shopify & eCommerce*). This improved categorized queries and made the JSON structure more maintainable.

## 2. Branded Asset Creation & Quota Limits
**Problem**: The website initially relied heavily on generic Unsplash photography placeholders, which contrasted with the "futuristic agency" theme. When generating custom 3D illustrations, I encountered **API Quota Exhaustion**.
**Solution**: I prioritized generating high-impact illustrations for the most important pages (Home, About, Web Dev, and Portfolio). For the remaining sub-pages, I utilized high-fidelity fallbacks and ensured the primary brand touchpoints were fully unique and premium.

## 3. UI/UX Consistency (Glassmorphism)
**Problem**: Implementing a "Glassmorphism" theme across multiple custom sections (Hero, Stats, FAQs, Lead Forms) required constant refinement of border opacities, backdrop blurs, and contrast ratios to ensure readability in dark mode.
**Solution**: Developed a set of consistent CSS utility patterns and reused them across components to ensure that every "glass" card and container felt part of the same design system.

## 4. Large Dataset Handling in JSON
**Problem**: Appending 24+ new FAQ items and then reorganizing a file of nearly 300 lines of JSON manually is prone to syntax errors (trailing commas, bracket mismatches).
**Solution**: utilized systematic `replace_file_content` and `write_to_file` operations with strict verification steps to ensure JSON integrity was maintained throughout multiple expansion phases.

## 5. Performance vs. Animations
**Problem**: Using heavy Framer Motion animations and high-resolution PNGs could lead to performance drops on mobile devices.
**Solution**: Implemented `whileInView` and `viewport={{ once: true }}` settings for animations to ensure they only trigger when visible, reducing CPU overhead during scrolling.
