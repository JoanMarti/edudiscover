import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad | EduDiscover',
    description: 'Política de privacidad y protección de datos de EduDiscover conforme al RGPD.',
};

export default function PrivacidadPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container-custom py-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-2">Política de Privacidad</h1>
                <p className="text-gray-500 mb-10">Última actualización: 1 de enero de 2026</p>

                <div className="prose prose-gray max-w-none space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Responsable del tratamiento</h2>
                        <p className="text-gray-700 leading-relaxed">
                            EduDiscover S.L. (en adelante, «EduDiscover»), con domicilio social en Calle Gran Vía 28, 28013 Madrid, España, y CIF B-12345678, es el responsable del tratamiento de los datos personales recogidos a través de este sitio web.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            Puede contactar con nuestro Delegado de Protección de Datos (DPD) en: <a href="mailto:privacidad@edudiscover.es" className="text-primary-600 hover:underline">privacidad@edudiscover.es</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Datos que recopilamos</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">Recopilamos los siguientes tipos de datos personales:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Datos de registro:</strong> nombre, apellidos, dirección de correo electrónico y contraseña (almacenada de forma cifrada).</li>
                            <li><strong>Datos de perfil:</strong> información sobre sus hijos (edad, etapa educativa), preferencias de búsqueda y colegios guardados.</li>
                            <li><strong>Datos de uso:</strong> páginas visitadas, búsquedas realizadas, tiempo de sesión e interacciones con la plataforma.</li>
                            <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo e identificadores de dispositivo.</li>
                            <li><strong>Cookies:</strong> según su consentimiento, podemos utilizar cookies analíticas y de personalización. Consulte nuestra <a href="#cookies" className="text-primary-600 hover:underline">Política de Cookies</a>.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Finalidad y base legal del tratamiento</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-200 text-sm">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Finalidad</th>
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Base legal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Gestión de la cuenta de usuario', 'Ejecución de contrato (Art. 6.1.b RGPD)'],
                                        ['Personalización de resultados de búsqueda', 'Interés legítimo (Art. 6.1.f RGPD)'],
                                        ['Envío de comunicaciones comerciales', 'Consentimiento (Art. 6.1.a RGPD)'],
                                        ['Análisis estadístico de uso', 'Consentimiento (Art. 6.1.a RGPD)'],
                                        ['Cumplimiento de obligaciones legales', 'Obligación legal (Art. 6.1.c RGPD)'],
                                    ].map(([finalidad, base]) => (
                                        <tr key={finalidad} className="border-t border-gray-200">
                                            <td className="border border-gray-200 p-3 text-gray-700">{finalidad}</td>
                                            <td className="border border-gray-200 p-3 text-gray-700">{base}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Conservación de los datos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Los datos personales se conservarán mientras la cuenta de usuario esté activa. Una vez eliminada la cuenta, los datos se suprimirán en un plazo máximo de 30 días, salvo que deban conservarse por obligación legal (por ejemplo, datos fiscales durante 5 años).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Sus derechos</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            De conformidad con el RGPD y la LOPDGDD, usted tiene derecho a:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Acceso:</strong> conocer qué datos personales tratamos sobre usted.</li>
                            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos («derecho al olvido»).</li>
                            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
                            <li><strong>Limitación:</strong> solicitar la restricción del tratamiento de sus datos.</li>
                            <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y legible por máquina.</li>
                            <li><strong>Retirada del consentimiento:</strong> retirar su consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            Para ejercer sus derechos, envíe un correo a <a href="mailto:privacidad@edudiscover.es" className="text-primary-600 hover:underline">privacidad@edudiscover.es</a> adjuntando una copia de su DNI. También puede presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Agencia Española de Protección de Datos (AEPD)</a>.
                        </p>
                    </section>

                    <section id="cookies">
                        <h2 className="text-2xl font-bold mb-4">6. Política de Cookies</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Utilizamos cookies propias y de terceros. Puede gestionar sus preferencias en cualquier momento haciendo clic en «Preferencias de cookies» en el pie de página.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-200 text-sm">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Tipo</th>
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Finalidad</th>
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Duración</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Esenciales', 'Funcionamiento básico del sitio, sesión de usuario', 'Sesión'],
                                        ['Analíticas', 'Estadísticas de uso anónimas', '2 años'],
                                        ['Publicidad', 'Anuncios personalizados', '1 año'],
                                        ['Redes sociales', 'Botones de compartir y widgets sociales', '1 año'],
                                    ].map(([tipo, finalidad, duracion]) => (
                                        <tr key={tipo} className="border-t border-gray-200">
                                            <td className="border border-gray-200 p-3 text-gray-700 font-medium">{tipo}</td>
                                            <td className="border border-gray-200 p-3 text-gray-700">{finalidad}</td>
                                            <td className="border border-gray-200 p-3 text-gray-700">{duracion}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Cambios en esta política</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Podemos actualizar esta política de privacidad periódicamente. Le notificaremos cualquier cambio significativo por correo electrónico o mediante un aviso destacado en el sitio web. Le recomendamos revisar esta página regularmente.
                        </p>
                    </section>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <p className="text-gray-600 text-sm">
                            Para cualquier consulta sobre privacidad, contacte con nosotros en{' '}
                            <a href="mailto:privacidad@edudiscover.es" className="text-primary-600 hover:underline">
                                privacidad@edudiscover.es
                            </a>{' '}
                            o visite nuestra página de{' '}
                            <a href="/contacto" className="text-primary-600 hover:underline">Contacto</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
