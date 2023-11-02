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
	},

	saveData: async () => {
		// Dni
		if (FilePickerDni.files[0]) {
			CreateFileDni.run().then(showAlert('Dni cargado!', 'success'));
		}

		// Cuil
		if (FilePickerCuil.files[0]) {
			CreateFileCuil.run().then(showAlert('Cuil cargado!', 'success'));
		}

		// CV
		if (FilePickerCv.files[0]) {
			CreateFileCv.run().then(showAlert('CV cargado!', 'success'));
		}

		// Anses
		if (FilePickerAnses.files[0]) {
			CreateFileAnses.run().then(showAlert('Anses cargado!', 'success'));
		}

		// Afip
		if (FilePickerAfip.files[0]) {
			CreateFileAfip.run().then(showAlert('Afip cargado!', 'success'));
		}

		// Psicofisico
		if (FilePickerPsicofisico.files[0]) {
			CreateFilePsicofisico.run().then(showAlert('Psicofisico cargado!', 'success'));
		}

		// Discapacidad
		if (FilePickerDiscapacidad.files[0]) {
			CreateFileDiscapacidad.run().then(showAlert('Discapacidad cargada!', 'success'));
		}

		// CertificadoDomicilio
		if (FilePickerCertificadoDomicilio.files[0]) {
			CreateFileCertificadoDomicilio.run().then(showAlert('CertificadoDomicilio cargado!', 'success'));
		}
		
		// AfiliacionGremial
		if (FilePickerAfiliacionGremial.files[0]) {
			CreateFileAfiliacionGremial.run().then(showAlert('AfiliacionGremial cargado!', 'success'));
		}

		// AcordadDesignacion
		if (FilePickerAcordadDesignacion.files[0]) {
			CreateFileAcordadDesignacion.run().then(showAlert('AcordadDesignacion cargado!', 'success'));
		}

		// ActaMatrimonio
		if (FilePickerActaMatrimonio.files[0]) {
			CreateFileActaMatrimonio.run().then(showAlert('ActaMatrimonio cargado!', 'success'));
		}

		// ActaPosesionCargo
		if (FilePickerActaPosesionCargo.files[0]) {
			CreateFileActaPosesionCargo.run().then(showAlert('ActaPosesionCargo cargado!', 'success'));
		}

		// Seguro
		if (FilePickerSeguro.files[0]) {
			CreateFileSeguro.run().then(showAlert('Seguro cargado!', 'success'));
		}

		Utils.getFilesByLegajo();
	}
	
}