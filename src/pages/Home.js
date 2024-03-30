const Home = () => {
    return (
        <div>
            <h1>Accueil</h1>
            <p>Le but de cette application est de gérer une liste de tâches.</p>
            <p>Elle doit permettre leur création, modification et suppression des tâches.<br/>
                Les taches doivent être sauvegardées et récupérables même après un rechargement de page.</p>
            <p>L'appli se découpe en 3 parties :</p>
            <ul>
                <li>
                    <p>Un dashboard possédant :</p>
                    <ul>
                        <li>des stats (nombre de tâches en cours / complétées; les tâches avec deadline dépassée)</li>
                        <li>une listes des tâches urgentes à faire (deadline courte ou dépassée)</li>
                    </ul>
                </li>
                <li style={{marginBottom: "14px"}}>
                    <p>Une page qui liste toutes les tâches</p>
                    <ul>
                        <li>options de filtrage / tri et recherche</li>
                        <li>des boutons d'actions pour passer une tâche en état "complétée" / editer ou supprimer</li>
                    </ul>
                </li>
                <li style={{marginBottom: "14px"}}>Une page de création de tâche</li>
                <li>Une page d'édition / suppression de tâches</li>
            </ul>
        </div>
    );
}

export default Home;