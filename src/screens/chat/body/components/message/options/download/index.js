const downloadArchive = async (file) => {
    try {
        const response = await fetch(file.src);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${file.name}.${file.extension}`;
        link.click();
    } catch (error) {
        console.error('Ocorreu um erro durante o download:', error);
    }
};

export { downloadArchive };
