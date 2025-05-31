// Responsive classes based on screen size
const getCompactResponsiveClasses = () => {
    const classes = {
        // Much smaller container - positioned as floating box
        contentContainer: screenSize === 'xs'
            ? 'absolute bottom-4 left-2 right-2 z-10'
            : screenSize === 'sm'
                ? 'absolute bottom-6 left-4 right-4 z-10'
                : screenSize === 'md'
                    ? 'absolute bottom-8 left-6 right-6 z-10 max-w-lg'
                    : 'absolute bottom-8 left-8 z-10 max-w-md',

        // Compact content box with minimal padding
        contentBox: screenSize === 'xs'
            ? 'p-3 rounded-lg backdrop-blur-md'
            : screenSize === 'sm'
                ? 'p-4 rounded-xl backdrop-blur-md'
                : 'p-5 rounded-xl backdrop-blur-md',

        // Smaller title sizing
        title: screenSize === 'xs'
            ? 'text-sm font-bold mb-1'
            : screenSize === 'sm'
                ? 'text-base font-bold mb-1'
                : 'text-lg font-bold mb-2',

        // Compact description
        description: screenSize === 'xs'
            ? 'text-xs mb-2 leading-tight'
            : screenSize === 'sm'
                ? 'text-sm mb-3 leading-tight'
                : 'text-sm mb-3 leading-relaxed',

        // Horizontal stats layout for compactness
        statsGrid: screenSize === 'xs'
            ? 'flex gap-1 mb-2'
            : screenSize === 'sm'
                ? 'flex gap-2 mb-3'
                : 'flex gap-3 mb-3',

        // Very compact stats container
        statsContainer: screenSize === 'xs'
            ? 'rounded px-2 py-1 border transition-all duration-300 flex-1 text-center'
            : screenSize === 'sm'
                ? 'rounded-md px-2 py-1.5 border transition-all duration-300 flex-1 text-center'
                : 'rounded-lg px-3 py-2 border transition-all duration-300 flex-1 text-center',

        // Compact stats values and labels
        statsValue: screenSize === 'xs'
            ? 'text-xs font-bold'
            : screenSize === 'sm'
                ? 'text-sm font-bold'
                : 'text-base font-bold',

        statsLabel: screenSize === 'xs'
            ? 'text-xs opacity-80'
            : 'text-xs opacity-90',

        // Compact buttons
        buttonContainer: 'flex gap-2',

        primaryButton: screenSize === 'xs'
            ? 'px-3 py-1.5 text-xs font-medium rounded-full flex items-center gap-1 transition-all duration-300'
            : screenSize === 'sm'
                ? 'px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1 transition-all duration-300'
                : 'px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300',

        secondaryButton: screenSize === 'xs'
            ? 'px-3 py-1.5 text-xs font-medium rounded-full flex items-center gap-1 transition-all duration-300 border'
            : screenSize === 'sm'
                ? 'px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1 transition-all duration-300 border'
                : 'px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300 border',

        // Compact navigation
        navContainer: screenSize === 'xs'
            ? 'absolute top-4 right-2 z-20 flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full'
            : screenSize === 'sm'
                ? 'absolute top-6 right-4 z-20 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-2 py-1.5 rounded-full'
                : 'absolute top-8 right-8 z-20 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full',

        navButton: screenSize === 'xs'
            ? 'flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300'
            : screenSize === 'sm'
                ? 'flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300'
                : 'flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300',

        navIcon: screenSize === 'xs'
            ? 'w-3 h-3 text-white'
            : 'w-4 h-4 text-white',

        buttonIcon: screenSize === 'xs'
            ? 'w-3 h-3'
            : 'w-3 h-3'
    };

    return classes;
};