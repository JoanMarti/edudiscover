import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Términos de Servicio | EduDiscover',
    description: 'Términos y condiciones de uso de EduDiscover.',
};

export default function TerminosPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container-custom py-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-2">Términos de Servicio</h1>
                <p className="text-gray-500 mb-10">Última actualización: 1 de enero de 2026</p>

                <div className="space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Aceptación de los términos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Al acceder y utilizar EduDiscover (el «Servicio»), usted acepta quedar vinculado por estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al Servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Descripción del servicio</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            EduDiscover es una plataforma de búsqueda y comparación de centros educativos en España que ofrece:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Directorio de colegios con información detallada</li>
                            <li>Herramienta de comparación entre centros</li>
                            <li>Sistema de opiniones y valoraciones de familias</li>
                            <li>Guías y recursos educativos</li>
                            <li>Gestión de perfil de usuario y preferencias</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Cuentas de usuario</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Para acceder a determinadas funcionalidades, deberá crear una cuenta. Al hacerlo, usted se compromete a:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Proporcionar información veraz, exacta y actualizada</li>
                            <li>Mantener la confidencialidad de su contraseña</li>
                            <li>Notificarnos inmediatamente cualquier uso no autorizado de su cuenta</li>
                            <li>Ser responsable de todas las actividades realizadas desde su cuenta</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            Nos reservamos el derecho de suspender o cancelar cuentas que incumplan estos términos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Uso aceptable</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">Queda prohibido utilizar el Servicio para:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Publicar contenido falso, engañoso o difamatorio sobre centros educativos</li>
                            <li>Realizar scraping automatizado o acceso masivo a los datos sin autorización</li>
                            <li>Suplantar la identidad de otros usuarios o centros educativos</li>
                            <li>Enviar comunicaciones no solicitadas (spam)</li>
                            <li>Cualquier actividad ilegal o que vulnere derechos de terceros</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Contenido generado por usuarios</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Al publicar opiniones, valoraciones u otro contenido en EduDiscover, usted:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Garantiza que el contenido es veraz y basado en experiencias reales</li>
                            <li>Nos otorga una licencia no exclusiva para mostrar y distribuir dicho contenido</li>
                            <li>Acepta que podemos moderar o eliminar contenido que incumpla nuestras normas</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Propiedad intelectual</h2>
                        <p className="text-gray-700 leading-relaxed">
                            El Servicio y su contenido original (excluyendo el contenido proporcionado por usuarios) son propiedad exclusiva de EduDiscover S.L. y están protegidos por las leyes de propiedad intelectual. Queda prohibida la reproducción, distribución o modificación sin autorización expresa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Limitación de responsabilidad</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            EduDiscover actúa como plataforma de información y no garantiza:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>La exactitud o completitud de la información sobre los centros educativos</li>
                            <li>La veracidad de las opiniones publicadas por usuarios</li>
                            <li>La disponibilidad ininterrumpida del Servicio</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            En ningún caso EduDiscover será responsable de daños indirectos, incidentales o consecuentes derivados del uso del Servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Modificaciones del servicio</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nos reservamos el derecho de modificar o interrumpir el Servicio en cualquier momento, con o sin previo aviso. No seremos responsables ante usted ni ante terceros por cualquier modificación, suspensión o interrupción del Servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Ley aplicable y jurisdicción</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Estos Términos se regirán e interpretarán de conformidad con la legislación española. Para cualquier controversia derivada de estos Términos, las partes se someten a la jurisdicción de los Juzgados y Tribunales de Madrid, con renuncia expresa a cualquier otro fuero.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Para cualquier consulta sobre estos Términos, puede contactarnos en{' '}
                            <a href="mailto:legal@edudiscover.es" className="text-primary-600 hover:underline">
                                legal@edudiscover.es
                            </a>{' '}
                            o a través de nuestra{' '}
                            <a href="/contacto" className="text-primary-600 hover:underline">página de contacto</a>.
                        </p>
                    </section>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <p className="text-gray-600 text-sm">
                            Al utilizar EduDiscover, confirma que ha leído, comprendido y aceptado estos Términos de Servicio. Consulte también nuestra{' '}
                            <a href="/privacidad" className="text-primary-600 hover:underline">Política de Privacidad</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
