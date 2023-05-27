import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/SdCardAlert";
import PointOfSaleIcon from "@mui/icons-material/CreditScore";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/PeopleOutline";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utilities/axiosClient";

const Dashboard = () => {
    const { user, token } = useUserContext();
    const theme = useTheme();
    const navigate = useNavigate();
    const colors = tokens(theme.palette.mode);
    useEffect(() => {
        if (!user || !token) {
            navigate("/login");
        }
    }, []);
    const [overdue, setOverdue] = useState(null);
    const [loans, setLoans] = useState(null);
    const [lastMonthMembers, setLastMonthMembers] = useState([]);
    const [overdueBooksArray, setOverdueBooksArray] = useState([]);
    const [chartData, setChartData] = useState([]);

    function getMonthName(monthNumber) {
        const [, month] = monthNumber.split("-");
        const months = {
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            10: "October",
            11: "November",
            12: "December",
        };

        return months[month];
    }

    function getDaysDifference(dateString) {
        const currentDate = new Date();
        const providedDate = new Date(dateString);

        const diffInMilliseconds = Math.abs(providedDate - currentDate);
        const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

        return diffInDays;
      }


    const fetchMembers = () => {
        axiosClient.get("/dashboard/members").then((response) => {
            setLastMonthMembers(response.data.lastMonthMembers);
            console.log(response.data.borrowers_chart);
            setChartData([
                {
                    id: "Borrowers",
                    color: tokens("dark").blueAccent[300],
                    data: response.data.borrowers_chart.map((currentObject) => {
                        return {
                            x: getMonthName(currentObject.month),
                            y: currentObject.count,
                        };
                    }),
                },
                {
                    id: "Members",
                    color: tokens("dark").redAccent[200],
                    data: response.data.members_chart.map((currentObject) => {
                        return {
                            x: getMonthName(currentObject.month),
                            y: currentObject.count,
                        };
                    }),
                },
            ]);
        });
    };

    const fetchData = async () => {
        try {
            const response = await axiosClient.get("/booksmeta/overdue");
            setOverdue(response.data.overdueBooksCount);
            setLoans(response.data.TotalLoans);
            setOverdueBooksArray(response.data.overdueBooksArray);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
        fetchMembers();
    }, []);

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header
                    title="DASHBOARD"
                    subtitle="Welcome to your dashboard"
                />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[500],
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title={overdue}
                        subtitle="OverDue"
                        progress="0.75"
                        increase="14%"
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title={loans}
                        subtitle="Loans"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title={lastMonthMembers}
                        subtitle="New Members"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="157"
                        subtitle="Visitors"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Circulation chart
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500],
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} data={chartData} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Typography
                        color={colors.grey[100]}
                        variant="h3"
                        fontWeight="600"
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        Overdue Book Loan
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontWeight="600"
                        >
                            Book & Borrower
                        </Typography>
                        <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontWeight="600"
                        >
                            Due Date
                        </Typography>
                        <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontWeight="600"
                        >
                            Late By
                        </Typography>
                    </Box>
                    {overdueBooksArray.map((ovdbook, i) => (
                        <Box
                            key={`${ovdbook.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {ovdbook.title}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {ovdbook.first_name + " " + ovdbook.last_name}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {ovdbook.due_date}
                            </Box>
                            <Box
                                backgroundColor="#FE3535"
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                {getDaysDifference(ovdbook.due_date) + " Days"}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
