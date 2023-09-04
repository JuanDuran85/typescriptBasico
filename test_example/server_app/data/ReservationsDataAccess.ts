import { Reservation } from "../model/ReservationModel";
import { DataBase } from "./DataBase";

export class ReservationsDataAccess {
  private reservationsDataBase = new DataBase<Reservation>();

  public async createReservation(reservation: Reservation): Promise<string> {
    const id: string = await this.reservationsDataBase.insert(reservation);
    return id;
  }

  public async updateReservation(
    reservationId: string,
    field: keyof Reservation,
    value: any
  ): Promise<void> {
    await this.reservationsDataBase.update(reservationId, field, value);
  }

  public async deleteReservation(reservationId: string): Promise<void> {
    await this.reservationsDataBase.delete(reservationId);
  }

  public async getReservation(reservationId: string): Promise<Reservation> {
    const result: Reservation = await this.reservationsDataBase.getBy(
      "id",
      reservationId
    );
    return result;
  }

  public async getAllReservations(): Promise<Reservation[]> {
    const result: Reservation[] =
      await this.reservationsDataBase.getAllElements();
    return result;
  }
}
