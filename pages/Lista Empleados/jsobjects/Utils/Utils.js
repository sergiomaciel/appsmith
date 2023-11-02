export default {
	
	getFilesByLegajo: async () => {
		const files = await ListFile.run();
		storeValue('files', files);
		console.log(files);

		// Dni
		const dniFile = files.find(file => file.fileName.includes('Dni'));
		storeValue('dniFile', dniFile ? dniFile.url : null);

		// Cuil
		const cuilFile = files.find(file => file.fileName.includes('Cuil'));
		storeValue('cuilFile', cuilFile ? cuilFile.url : null);

		// Cv
		const cvFile = files.find(file => file.fileName.includes('Cv'));
		storeValue('cvFile', cvFile ? cvFile.url : null);

		// Anses
		const ansesFile = files.find(file => file.fileName.includes('Anses'));
		storeValue('ansesFile', ansesFile ? ansesFile.url : null);

		// Afip
		const afipFile = files.find(file => file.fileName.includes('Afip'));
		storeValue('afipFile', afipFile ? afipFile.url : null);

		// Psicofisico
		const psicofisicoFile = files.find(file => file.fileName.includes('Psicofisico'));
		storeValue('psicofisicoFile', psicofisicoFile ? psicofisicoFile.url : null);

		// Discapacidad
		const discapacidadFile = files.find(file => file.fileName.includes('Discapacidad'));
		storeValue('discapacidadFile', discapacidadFile ? discapacidadFile.url : null);

		// CertificadoDomicilio
		const certificadoDomicilioFile = files.find(file => file.fileName.includes('CertificadoDomicilio'));
		storeValue('certificadoDomicilioFile', certificadoDomicilioFile ? certificadoDomicilioFile.url : null);
		
		// AfiliacionGremial
		const afiliacionGremialFile = files.find(file => file.fileName.includes('AfiliacionGremial'));
		storeValue('afiliacionGremialFile', afiliacionGremialFile ? afiliacionGremialFile.url : null);

		// AcordadDesignacion
		const acordadDesignacionFile = files.find(file => file.fileName.includes('AcordadDesignacion'));
		storeValue('acordadDesignacionFile', acordadDesignacionFile ? acordadDesignacionFile.url : null);

		// ActaMatrimonio
		const actaMatrimonioFile = files.find(file => file.fileName.includes('ActaMatrimonio'));
		storeValue('actaMatrimonioFile', actaMatrimonioFile ? actaMatrimonioFile.url : null);

		// ActaPosesionCargo
		const actaPosesionCargoFile = files.find(file => file.fileName.includes('ActaPosesionCargo'));
		storeValue('actaPosesionCargoFile', actaPosesionCargoFile ? actaPosesionCargoFile.url : null);

		// Seguro
		const seguroFile = files.find(file => file.fileName.includes('Seguro'));
		storeValue('seguroFile', seguroFile ? seguroFile.url : null);

		return files;
	}
}