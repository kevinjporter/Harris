USE [PIMS-DB]
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_Update]    Script Date: 20/03/2025 19:57:31 ******/
DROP PROCEDURE IF EXISTS [dbo].[PIMS_Product_Update]
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_Insert]    Script Date: 20/03/2025 19:57:31 ******/
DROP PROCEDURE IF EXISTS [dbo].[PIMS_Product_Insert]
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_GetList]    Script Date: 20/03/2025 19:57:31 ******/
DROP PROCEDURE IF EXISTS [dbo].[PIMS_Product_GetList]
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_Get]    Script Date: 20/03/2025 19:57:31 ******/
DROP PROCEDURE IF EXISTS [dbo].[PIMS_Product_Get]
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_Delete]    Script Date: 20/03/2025 19:57:31 ******/
DROP PROCEDURE IF EXISTS [dbo].[PIMS_Product_Delete]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 20/03/2025 19:57:31 ******/
DROP TABLE IF EXISTS [dbo].[Products]
GO
USE [master]
GO
/****** Object:  Database [PIMS-DB]    Script Date: 20/03/2025 19:57:31 ******/
DROP DATABASE IF EXISTS [PIMS-DB]
GO
/****** Object:  Database [PIMS-DB]    Script Date: 20/03/2025 19:57:31 ******/
CREATE DATABASE [PIMS-DB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PIMS-DB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQL2022\MSSQL\DATA\PIMS-DB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'PIMS-DB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQL2022\MSSQL\DATA\PIMS-DB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [PIMS-DB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PIMS-DB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PIMS-DB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PIMS-DB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PIMS-DB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PIMS-DB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PIMS-DB] SET ARITHABORT OFF 
GO
ALTER DATABASE [PIMS-DB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PIMS-DB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PIMS-DB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PIMS-DB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PIMS-DB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PIMS-DB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PIMS-DB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PIMS-DB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PIMS-DB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PIMS-DB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PIMS-DB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PIMS-DB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PIMS-DB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PIMS-DB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PIMS-DB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PIMS-DB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PIMS-DB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PIMS-DB] SET RECOVERY FULL 
GO
ALTER DATABASE [PIMS-DB] SET  MULTI_USER 
GO
ALTER DATABASE [PIMS-DB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PIMS-DB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PIMS-DB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PIMS-DB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [PIMS-DB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [PIMS-DB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'PIMS-DB', N'ON'
GO
ALTER DATABASE [PIMS-DB] SET QUERY_STORE = ON
GO
ALTER DATABASE [PIMS-DB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [PIMS-DB]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 20/03/2025 19:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductID] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](100) NOT NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[Quantity] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_Delete]    Script Date: 20/03/2025 19:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Kevin Porter
-- Create date: 17/3/2025
-- Description:	Deletes an existing product
-- =============================================
CREATE PROCEDURE [dbo].[PIMS_Product_Delete]
	@ProductID INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DELETE FROM [PIMS-DB].[dbo].[Products]
	WHERE ProductID = @ProductID

	SELECT @@ROWCOUNT AS DeletedRecords
END
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_Get]    Script Date: 20/03/2025 19:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Kevin Porter
-- Create date: 20/03/2025
-- Description:	Retrieve a single product
-- =============================================
CREATE PROCEDURE [dbo].[PIMS_Product_Get] @ProductId INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT 
		ProductID,
		ProductName,
		Price,
		Quantity
	FROM [PIMS-DB].[dbo].[Products]
	WHERE 
		ProductId = @ProductId
END
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_GetList]    Script Date: 20/03/2025 19:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Kevin Porter
-- Create date: 16/03/2025
-- Description:	Retrieves all products
-- =============================================
CREATE PROCEDURE [dbo].[PIMS_Product_GetList]
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT 
		ProductID,
		ProductName,
		Price,
		Quantity
	FROM [PIMS-DB].[dbo].[Products]
END
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_Insert]    Script Date: 20/03/2025 19:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Kevin Porter
-- Create date: 17/03/2025
-- Description:	Inserts a new product
-- =============================================
CREATE PROCEDURE [dbo].[PIMS_Product_Insert] 
	@ProductName nvarchar(100),
	@Price decimal(18,2),
	@Quantity int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO [PIMS-DB].dbo.Products (
		[ProductName],
		[Price],
		[Quantity])
	VALUES (@ProductName, @Price, @Quantity)

	SELECT CAST(SCOPE_IDENTITY() AS INT) AS NewProductID
END
GO
/****** Object:  StoredProcedure [dbo].[PIMS_Product_Update]    Script Date: 20/03/2025 19:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Kevin Porter
-- Create date: 17/3/2025
-- Description:	Updates an existing product
-- =============================================
CREATE PROCEDURE [dbo].[PIMS_Product_Update]
	@ProductID INT,
	@ProductName nvarchar(100),
	@Price decimal(18,2),
	@Quantity int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	UPDATE [PIMS-DB].[dbo].Products
	SET 
		[ProductName] = @ProductName,
		[Price] = @Price,
		[Quantity] = @Quantity
	WHERE 
		ProductID = @ProductID
END
GO
USE [master]
GO
ALTER DATABASE [PIMS-DB] SET  READ_WRITE 
GO
