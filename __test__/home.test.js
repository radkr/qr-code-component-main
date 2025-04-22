import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/app/page";

describe(Home, () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn();
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
  });

  it("does not render QR Code Modal right after load", () => {
    //Arrange
    render(<Home />);
    //Act
    const qrCodeModal = screen.queryByTestId("qr-code-modal-test-id");
    //Assert
    expect(qrCodeModal).not.toBeInTheDocument();
  });

  it("open up QR Code Modal on clicking anywhere", async () => {
    //Arrange
    render(<Home />);
    //Act
    const main = screen.getByRole("main");
    await userEvent.click(main);
    const qrCodeModal = await screen.findByTestId("qr-code-modal-test-id");
    //Assert
    expect(qrCodeModal).toBeInTheDocument();
  });

  //No support for dialog by Jest DOM so this test will fail
  it("close QR Code Modal on pressing ESC (failes due to lack of jest dom support)", async () => {
    //Arrange
    render(<Home />);
    //Act
    const main = screen.getByRole("main");
    await userEvent.click(main);
    const qrCodeModalOpen = await screen.findByTestId("qr-code-modal-test-id");
    qrCodeModalOpen.focus();
    await userEvent.keyboard("[Escape]");
    const qrCodeModalClosed = screen.queryByTestId("qr-code-modal-test-id");
    //Assert
    expect(qrCodeModalClosed).not.toBeInTheDocument();
  });

  it("close QR Code Modal on click", async () => {
    //Arrange
    render(<Home />);
    //Act
    const main = screen.getByRole("main");
    await userEvent.click(main);
    const qrCodeModalOpen = await screen.findByTestId("qr-code-modal-test-id");
    await userEvent.click(qrCodeModalOpen);
    const qrCodeModalClosed = screen.queryByTestId("qr-code-modal-test-id");
    //Assert
    expect(qrCodeModalClosed).not.toBeInTheDocument();
  });
});
