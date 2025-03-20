USE [PIMS-DB]
GO

EXECUTE [dbo].[PIMS_Product_Insert] 
   @ProductName = 'Playstation 5 Pro'
  ,@Price = 699.99
  ,@Quantity = 4
GO

EXECUTE [dbo].[PIMS_Product_Insert] 
   @ProductName = 'Dualsense Edge'
  ,@Price = 199.99
  ,@Quantity = 2
GO

EXECUTE [dbo].[PIMS_Product_Insert] 
   @ProductName = 'PS VR2'
  ,@Price = 399.99
  ,@Quantity = 10
GO

EXECUTE [dbo].[PIMS_Product_Insert] 
   @ProductName = 'God Of War Ragnarok'
  ,@Price = 59.99
  ,@Quantity = 7
GO

EXECUTE [dbo].[PIMS_Product_Insert] 
   @ProductName = 'Horizon Forbidden West'
  ,@Price = 69.99
  ,@Quantity = 5
GO

