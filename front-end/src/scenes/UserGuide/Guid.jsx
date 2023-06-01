import Logo from "../../components/Logo";
import "./Guid.css";

import Login from "../../screenshots/login.png";
import SignUp from "../../screenshots/register.png";
import Dash from "../../screenshots/dashboard_top.png";

import barChart from "../../screenshots/dashboard_bar.png";
import overude from "../../screenshots/overdue.png";
import SideBar from "../../screenshots/SideBar.png";
import Topbar from "../../screenshots/TopBar.png";
import addBook from "../../screenshots/add_boak.png";
import AddLoan from "../../screenshots/add_loan.png";
import AddMember from "../../screenshots/add_member.png";
import books from "../../screenshots/book.png";
import members from "../../screenshots/member.png";
import loans from "../../screenshots/loan.png";
import deleteMember from "../../screenshots/delete.png";

export function Guide() {
    return (
        <>
            <body>
                <header>
                    <div className="logo-wrapper">
                        <Logo></Logo>
                    </div>
                    <div
                        style={{
                            display: "inline-block",
                            verticalAlign: "middle",
                        }}
                    >
                        <h1>Tali3</h1>
                        <h1
                            style={{
                                display: "inline",
                                verticalAlign: "middle",
                            }}
                        >
                            طالـــــــع
                        </h1>
                    </div>
                </header>

                <main>
                    <h1>User Guide</h1>
                    <section>
                        <h2>Introduction</h2>
                        <p>
                            Welcome to the user manual for Tali3 System! This
                            manual serves as your comprehensive guide to
                            understanding and navigating the features and
                            functionalities of Tali3 System, designed
                            specifically for libraries and librarians in
                            Algeria. Whether you are a librarian, administrator,
                            or patron, this manual will provide you with the
                            necessary information to effectively utilize the
                            system and maximize its benefits.
                        </p>
                        <img
                            className="section-image"
                            src={Dash}
                            alt="Introduction"
                        />
                    </section>

                    <section>
                        <h2>- User Registration and Account Setup:</h2>
                        <p>
                            If you are a new user, you will need to register for
                            an account to access Tali3 System. Follow these
                            steps to set up your account a) On the login page,
                            look for the "Sign Up" option and click on it. b)
                            Fill out the registration form with the required
                            information, which may include your name, email
                            address, username, and password C) Click on the
                            "Register" or "Sign Up" button to create your
                            account
                        </p>
                        <img
                            className="section-image"
                            src={SignUp}
                            alt="Section 1 "
                        />
                        <img
                            className="section-image"
                            src={Login}
                            alt="Section 1 "
                        />
                    </section>

                    <section>
                        <h2> Dashboard</h2>
                        <p>
                            Upon logging into the Tali3 System, you will
                            typically be directed to the dashboard. The
                            dashboard, serves as the main landing page and
                            provides an overview of relevant information and
                            system updates. It may display statistics, charts,
                            notifications (e.g. for overdue book loans), and
                            shortcuts to commonly used features or modules.
                        </p>
                        <img
                            className="section-image"
                            src={barChart}
                            alt="section"
                        />
                        <img
                            className="section-image"
                            src={overude}
                            alt="section"
                        />
                    </section>
                    <section>
                        <h2> Navigation Menus</h2>
                        <p>
                            The navigation menu is a crucial component of the
                            user interface, allowing you to access different
                            sections and functionalities of the Tali3 System.
                            There are mainly two types of menus: Header and
                            Sidebar. The former is located in the top of the
                            screen, while the latter is on the left side on the
                            screen for left-to-right languages. The header
                            typically contains the following options: 1-
                            Dark/Light Mode: Switch from and to dark mode. 2-
                            Notifications: See latest notifications. 3-
                            Settings: Move to settings page where you will be
                            able to change your preferences, 4- Log out: Sign
                            out of Tali3.
                        </p>
                        <img
                            className="section-image"
                            src={Topbar}
                            alt="Section 2"
                        />
                    </section>

                    <section>
                        <h2> Members:</h2>
                        <p>
                            By clicking on Members button on the sidebar, you
                            will be taken to the members page where you can
                            manage patrons. This page contains the following
                            components 1- Members table containing the whole
                            list of patrons divided into pages, which can be
                            sorted according to your needs by simply clicking on
                            the header of the desired column to order. By
                            scrolling down, you can will find the pagination
                            component where you can move to the next page to
                            checkout new patrons. This component, gives you the
                            number of pages as well as the possibility to
                            directly jump to the last page. 2- Delete patron
                            button: By clicking on this button, you will be able
                            to delete a member PERMANENTLY from the database.
                            However, a confirmation prompt will appear before
                            that. To confirm the delete, click CONFIRM, else
                            click CANCEL 3- Add patron button: By clicking on
                            this button, a floating menu appears on the screen
                            which will allow to add a member using the fields in
                            the menu. 4- Search box: Using this box, you can
                            search for members by whatever field you wish. By
                            clicking CLEAR on the right-most of the box you will
                            be able to undo a search and clear the fields. 5-
                            Access level: This field specifies the access level
                            of this member from normal usre (i.e. patron) to
                            librarian, and administrator.
                        </p>
                        <img
                            className="section-image"
                            src={members}
                            alt="Section 2 "
                        />
                        <img
                            className="section-image"
                            src={deleteMember}
                            alt="Section 2 "
                        />
                        <img
                            className="section-image"
                            src={AddMember}
                            alt="Section 2 "
                        />
                    </section>

                    <section>
                        <h2>Books:</h2>
                        <p>
                            By clicking on books button on the sidebar, you will
                            be taken to the page where you can access and manage
                            books. This page contains the following components:
                            1- Books grid containing the whole list of books
                            visualized in grids with their images. By scrolling
                            down, you can will find the pagination component
                            where you can move to the next page to checkout new
                            books. This component, as clearly shown in, gives
                            you the number of pages as well as the possibility
                            to directly jump to the last page. 2- Add new book:
                            By clicking on this button on the top right of the
                            table, a floating menu appears on the screen which
                            will allow to add a book using the fields in the
                            menu 3- Search box: Using this box, you can search
                            for books by whatever field you wish. 4- Update
                            book: By clicking on the book's layout, you will be
                            able to check the book's complete data and upadte it
                            5- Delete book button: By clicking on this button,
                            you will be able to delete a book PERMANENTLY from
                            the database. However, a confirmation prompt will
                            appear before that. To confirm the delete, click
                            CONFIRM, else click CANCEL. 6- EXPORT: This button
                            allows you to download all the data as a .csv file.
                        </p>
                        <img
                            className="section-image"
                            src={addBook}
                            alt="Section 2"
                        />

                        <img
                            className="section-image"
                            src={books}
                            alt="Section 2"
                        />
                    </section>
                    <section>
                        <h2> Library Loan:</h2>
                        <img
                            className="section-image"
                            src=""
                            alt="Section 1 "
                        />
                        <p>
                            By clicking on Library Loans button on the sidebar,
                            you will be taken to the page where you can manage
                            loans. This page contains the following components:
                            1- Loans table containing the whole list of patrons
                            divided into pages, which can be sorted according to
                            your needs by simply clicking on the header of the
                            desired column to order by. By scrolling down, you
                            can will find the pagination component where you can
                            move to the next page to checkout new loans. This
                            component, as clearly shown in FIGURE, gives you the
                            number of pages as well as the possibility to
                            directly jump to the last page. 2- Add new loan: By
                            clicking on this button on the top right of the
                            table, a floating menu appears on the screen which
                            will allow to add a loan using the fields in the
                            menu. To cancel this operation, click on CANCEL in
                            the bottom left corner. 3- Search box: Using this
                            box, you can search for members by whatever field
                            you wish. 4- Update loan: By clicking on this button
                            on the top right of the table, a floating menu
                            appears on the screen which will allow to edit a
                            loan using the fields in the menu. To cancel this
                            operation, click on CANCEL in the bottom left
                            corner. 5- EXPORT: This button allows you to
                            download all the data as a .csv file.
                        </p>
                    </section>
                </main>

                <footer>
                    <p>&copy; 2023 TALI3. All rights reserved.</p>
                </footer>
            </body>
        </>
    );
}
